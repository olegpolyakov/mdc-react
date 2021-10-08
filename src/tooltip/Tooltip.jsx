import { useRef, useState, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import classnames from 'classnames';

import { Clone } from '../component';
import Layer from '../layer';

import { numbers, cssClasses } from './constants';

const Tooltip = forwardRef(({
    label,

    element: Element = 'div',
    className,
    children
}, ref) => {
    const tooltipRef = useRef();
    const targetRef = useRef(null);
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

    const handleMouseEnter = useCallback(event => {
        targetRef.current = event.currentTarget;
        setActive(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        targetRef.current = null;
        setActive(false);
    }, []);

    const handleEntering = useCallback(() => {
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const targetRect = targetRef.current.getBoundingClientRect();

        const top = (targetRect.top + targetRect.height + numbers.UNBOUNDED_ANCHOR_GAP);
        const left = (targetRect.left + targetRect.width * 0.5 - tooltipRect.width * 0.5);
        const right = left + tooltipRect.width;
        const bottom = top + tooltipRect.height;
        const overflowBottom = window.innerHeight - bottom;
        const overflowRight = window.innerWidth - right;

        if (
            tooltipRect.height > numbers.MIN_HEIGHT &&
            tooltipRect.width >= numbers.MAX_WIDTH
        ) {
            tooltipRef.current.classList.add(cssClasses.MULTILINE);
        }

        if (overflowBottom < 0) {
            tooltipRef.current.style.top = `${targetRect.top - tooltipRect.height - numbers.UNBOUNDED_ANCHOR_GAP}px`;
        } else {
            tooltipRef.current.style.top = `${top}px`;
        }

        if (overflowRight < 0) {
            tooltipRef.current.style.left = `${targetRect.right - tooltipRect.width}px`;
        } else {
            tooltipRef.current.style.left = `${left < 0 ? targetRect.left : left}px`;
        }
    }, []);

    const classNames = classnames(cssClasses.ROOT, className);

    return (<>
        <Clone
            component={children}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
                exit: `${cssClasses.HIDE_TRANSITION} ${cssClasses.HIDE}`,
                exitActive: `${cssClasses.HIDE_TRANSITION} ${cssClasses.HIDE}`
            }}
            onEntering={handleEntering}
            mountOnEnter
            unmountOnExit
        >
            <Element
                ref={tooltipRef}
                className={classNames}
                role="tooltip"
                aria-hidden={active ? undefined : 'true'}
            >
                <div className={`${cssClasses.SURFACE} ${cssClasses.SURFACE_ANIMATION}`}>
                    {label}
                </div>
            </Element>
        </Layer>
    </>);
});

Tooltip.displayName = 'MDCTooltip';

export default Tooltip;