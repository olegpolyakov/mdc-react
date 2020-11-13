import React, { useRef, useState, useCallback, useImperativeHandle } from 'react';
import classnames from 'classnames';

import { useMounted } from '../lifecycle-hooks';
import Layer from '../Layer';

export default React.forwardRef(Tooltip);

const MIN_HEIGHT = 24;
const MAX_WIDTH = 200;
const MIN_VIEWPORT_TOOLTIP_THRESHOLD = 32;
const BOUNDED_ANCHOR_GAP = 4;
const UNBOUNDED_ANCHOR_GAP = 8;

function Tooltip({
    label,

    element: Element = 'div',
    className,
    children
}, ref) {
    const tooltipRef = useRef();
    const targetRef = useRef(null);
    const [active, setActive] = useState(false);

    useImperativeHandle(ref, () => tooltipRef.current);

    useMounted(() => {
        function handleScroll() {
            setActive(active => active && !active);
        }

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, [active]);

    const handleMouseEnter = useCallback(event => {
        targetRef.current = event.target;
        setActive(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        targetRef.current = null;
        setActive(false);
    }, []);

    const handleEntering = useCallback(() => {
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const targetRect = targetRef.current.getBoundingClientRect();

        if (tooltipRect.height > MIN_HEIGHT && tooltipRect.width >= MAX_WIDTH) {
            tooltipRef.current.classList.add('mdc-tooltip--multiline');
        }

        const top = (targetRect.top + targetRect.height + UNBOUNDED_ANCHOR_GAP);
        const left = (targetRect.left + targetRect.width * 0.5 - tooltipRect.width * 0.5);
        const right = left + tooltipRect.width;
        const bottom = top + tooltipRect.height;
        const deltaBottom = window.innerHeight - bottom;
        const deltaRight = window.innerWidth - right;

        if (deltaBottom < 0) {
            tooltipRef.current.style.top = `${targetRect.top - tooltipRect.height - UNBOUNDED_ANCHOR_GAP}px`;
        } else {
            tooltipRef.current.style.top = `${top}px`;
        }

        if (deltaRight < 0) {
            tooltipRef.current.style.left = `${targetRect.right - tooltipRect.width}px`;
        } else {
            tooltipRef.current.style.left = `${left < 0 ? targetRect.left : left}px`;
        }
    }, []);

    const classNames = classnames('mdc-tooltip', className);

    return (
        <>
            {React.cloneElement(children, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            })}

            <Layer
                modal
                in={active}
                timeout={{ enter: 500, exit: 100 }}
                classNames={{
                    enter: 'mdc-tooltip--showing-transition',
                    enterActive: 'mdc-tooltip--showing-transition mdc-tooltip--showing',
                    enterDone: 'mdc-tooltip--showing-transition mdc-tooltip--shown',
                    exit: 'mdc-tooltip--hide-transition mdc-tooltip--hide',
                    exitActive: 'mdc-tooltip--hide-transition mdc-tooltip--hide',
                    exitDone: ''
                }}
                onEntering={handleEntering}
                mountOnEnter
                unmountOnExit
            >
                <Element ref={tooltipRef} className={classNames}>
                    <div className="mdc-tooltip__surface">
                        {label}
                    </div>
                </Element>
            </Layer>
        </>
    );
}