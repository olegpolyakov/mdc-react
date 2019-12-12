import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import Modal from '../Modal';

export default function Tooltip({
    label,
    large = false,

    className,
    children
}) {
    const classNames = classnames('mdc-tooltip', {
        'mdc-tooltip--large': large
    }, className);
    const tooltipRef = React.useRef();
    const [target, setTarget] = React.useState();

    function handleMouseEnter(event) {
        setTarget(event.target);
    }

    function handleMouseLeave(event) {
        setTarget(null);
    }

    const targetRect = target ? target.getBoundingClientRect() : null;
    const style = targetRect ? {
        left: (targetRect.left + targetRect.width * 0.5) + 'px',
        top: (targetRect.top + targetRect.height + 8) + 'px'
    } : null;
    
    return (
        <>
            {React.cloneElement(children, {
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave
            })}
            
            <CSSTransition
                in={Boolean(target)}
                timeout={{ enter: 150, exit: 0 }}
                classNames={{
                    enterDone: 'mdc-tooltip--active'
                }}
                mountOnEnter
                unmountOnExit
            >
                <Modal>
                    <div ref={tooltipRef} className={classNames} style={style}>{label}</div>
                </Modal>
            </CSSTransition>
        </>
    );
}