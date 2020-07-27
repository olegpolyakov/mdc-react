import React, { useRef, useState, useCallback, useImperativeHandle } from 'react';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Layer from '../Layer';

export default React.forwardRef(Tooltip);

function Tooltip({
    label,
    large = false,

    className,
    children
}, ref) {
    const tooltipRef = useRef();
    const targetRef = useRef(null);
    const [active, setActive] = useState(false);

    useImperativeHandle(ref, () => tooltipRef.current);

    useUpdated(() => {
        const targetRect = targetRef.current?.getBoundingClientRect();

        if (targetRect) {
            tooltipRef.current.style.top = (window.scrollY + targetRect.top + targetRect.height + 8) + 'px';
            tooltipRef.current.style.left = (window.scrollX + targetRect.left + targetRect.width * 0.5) + 'px';
        }
    }, [active]);

    const handleMouseEnter = useCallback(event => {
        targetRef.current = event.target;
        setActive(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        targetRef.current = null;
        setActive(false);
    }, []);

    const classNames = classnames('mdc-tooltip', {
        'mdc-tooltip--large': large
    }, className);

    return (
        <>
            {React.cloneElement(children, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            })}

            <Layer
                modal
                in={active}
                timeout={{ enter: 150, exit: 0 }}
                classNames={{
                    enterDone: 'mdc-tooltip--active'
                }}
                mountOnEnter
                unmountOnExit
            >
                <div ref={tooltipRef} className={classNames}>
                    {label}
                </div>
            </Layer>
        </>
    );
}