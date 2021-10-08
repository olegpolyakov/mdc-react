import { Children, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import classnames from 'classnames';

import { Clone } from '../component';
import Layer from '../layer';

import { numbers, cssClasses } from './constants';

const RichTooltip = forwardRef(({
    title,
    content,
    actions,

    element: Element = 'div',
    className,
    children
}, ref) => {
    const tooltipRef = useRef();
    const targetRef = useRef();

    const [active, setActive] = useState(false);

    useImperativeHandle(ref, () => tooltipRef.current);

    useEffect(() => {
        function handleScroll() {
            setActive(active => active && !active);
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleTargetMouseEnter = useCallback(() => {
        setActive(true);
    }, []);

    const handleTargetMouseLeave = useCallback(() => {
        setActive(false);
    }, []);

    const handleTooltipMouseEnter = useCallback(() => {
        setActive(true);
    }, []);

    const handleTooltipMouseLeave = useCallback(() => {
        setActive(false);
    }, []);

    const handleEntering = useCallback(() => {
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const targetRect = targetRef.current.getBoundingClientRect();

        const width = tooltipRef.current.firstChild.clientWidth;
        const height = tooltipRef.current.firstChild.scrollHeight;
        const top = targetRect.bottom + window.scrollY + numbers.UNBOUNDED_ANCHOR_GAP;
        const left = targetRect.right + window.scrollX + numbers.UNBOUNDED_ANCHOR_GAP;
        const right = left + width + numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        const bottom = top + height + numbers.MIN_VIEWPORT_TOOLTIP_THRESHOLD;
        const overflowBottom = window.innerHeight - bottom;
        const overflowRight = window.innerWidth - right;

        if (overflowBottom < 0) {
            tooltipRef.current.style.top = `${top + overflowBottom}px`;
        } else {
            tooltipRef.current.style.top = `${top}px`;
        }

        if (overflowRight < 0) {
            tooltipRef.current.style.left = `${targetRect.right - tooltipRect.width}px`;
        } else {
            tooltipRef.current.style.left = `${left < 0 ? targetRect.left : left}px`;
        }

        tooltipRef.current.getBoundingClientRect();
    }, []);

    const classNames = classnames(cssClasses.ROOT, cssClasses.RICH, className);

    return (<>
        <Clone
            component={children}
            ref={targetRef}
            onMouseEnter={handleTargetMouseEnter}
            onMouseLeave={handleTargetMouseLeave}
        />

        <Layer
            modal
            in={active}
            timeout={{
                enter: numbers.SHOW_DELAY_MS,
                exit: numbers.HIDE_DELAY_MS
            }}
            classNames={{
                enter: cssClasses.SHOWING_TRANSITION,
                enterActive: `${cssClasses.SHOWING_TRANSITION} ${cssClasses.SHOWING}`,
                enterDone: `${cssClasses.SHOWING_TRANSITION} ${cssClasses.SHOWN}`,
                exit: cssClasses.SHOWN,
                exitActive: `${cssClasses.HIDE_TRANSITION} ${cssClasses.SHOWN}`,
                exitDone: `${cssClasses.HIDE_TRANSITION} ${cssClasses.HIDE}`
            }}
            mountOnEnter
            unmountOnExit
            onEntering={handleEntering}
        >
            <Element
                ref={tooltipRef}
                className={classNames}
                role="tooltip"
                aria-hidden={active ? undefined : 'true'}
                aria-expanded={active ? 'true' : undefined}
                onMouseEnter={handleTooltipMouseEnter}
                onMouseLeave={handleTooltipMouseLeave}
            >
                <div className={`${cssClasses.SURFACE} ${cssClasses.SURFACE_ANIMATION}`}>
                    {title &&
                        <h2 className={cssClasses.TITLE}>{title}</h2>
                    }

                    {content &&
                        <p className={cssClasses.CONTENT}>{content}</p>
                    }

                    {actions &&
                        <div className={cssClasses.ACTIONS}>
                            {Children.map(actions, action =>
                                <Clone
                                    component={action}
                                    aria-label="action"
                                />
                            )}
                        </div>
                    }
                </div>
            </Element>
        </Layer>
    </>);
});

RichTooltip.displayName = 'MDCRichTooltip';

export default RichTooltip;