import React, { useRef, useState, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';

export default function Tooltip({
    label,
    large = false,

    className,
    children
}) {
    const tooltipRef = useRef();
    const targetRef = useRef(null);
    const [active, setActive] = useState(false);

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

    const handleMouseLeave = useCallback(event => {
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

            <CSSTransition
                in={active}
                timeout={{ enter: 150, exit: 0 }}
                classNames={{
                    enterDone: 'mdc-tooltip--active'
                }}
                mountOnEnter
                unmountOnExit
            >
                <Modal>
                    <div
                        ref={tooltipRef}
                        className={classNames}
                    >
                        {label}
                    </div>
                </Modal>
            </CSSTransition>
        </>
    );
}