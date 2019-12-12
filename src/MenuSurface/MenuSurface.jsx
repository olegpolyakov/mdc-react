import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';

export default function MenuSurface({
    anchor,
    open = false,
    top = false,
    left = false,
    bottom = false,
    right = false,
    belowAnchor = false,
    onClose = Function.prototype,

    element,
    className,
    ...props
}) {
    const rootElement = React.useRef();

    useUpdated(() => {
        const handleBodyClick = () => onClose();

        if (open) {
            document.body.addEventListener('click', handleBodyClick);
        } else {
            document.body.removeEventListener('click', handleBodyClick);
        }
    }, [open]);

    useUpdated(() => {
        if (!open) return;
        
        if (!rootElement.current || !anchor) return;

        const { clientWidth: width, clientHeight: height } = rootElement.current;
        const anchorDimensions = anchor.getBoundingClientRect();
        const style = {
            position: 'absolute',
            transformOrigin: ''
        };
        
        if (left || !right) {
            const left = anchorDimensions.left;
            const right = left + width;
            const delta = window.innerWidth - right;

            style.left = `${delta > 0 ? left : left - Math.abs(delta)}px`;
            style.transformOrigin += 'left';
        } else if (right) {
            const left = anchorDimensions.right - width;

            style.left = `${left > 0 ? left : 0}px`;
            style.transformOrigin += 'right';
        }

        if (top || !bottom) {
            const top = anchorDimensions.top + (belowAnchor ? anchorDimensions.height : 0) + window.scrollY;
            const bottom = anchorDimensions.top + (belowAnchor ? anchorDimensions.height : 0) + height;
            const delta = window.innerHeight - bottom;

            style.top = `${delta > 0 ? top : top - Math.abs(delta)}px`;
            style.transformOrigin += ' top';
        } else if (bottom) {
            const top = anchorDimensions.bottom - height + window.scrollY;
            
            style.top = `${top > 0 ? top : 0}px`;
            style.transformOrigin += ' bottom';
        }

        rootElement.current.style.left = style.left;
        rootElement.current.style.top = style.top;
        rootElement.current.style.position = style.position;
        rootElement.current.style.transformOrigin = style.transformOrigin;
    }, [open]);

    return (
        <CSSTransition
            in={open}
            timeout={{ enter: 120, exit: 75 }}
            classNames={{
                enter: 'mdc-menu-surface--animating-open',
                enterActive: 'mdc-menu-surface--open',
                enterDone: 'mdc-menu-surface--open',
                exit: 'mdc-menu-surface--animating-closed'
            }}
            mountOnEnter
            unmountOnExit
        >
            <Modal>
                <div
                    className={classnames('mdc-menu-surface', className)}
                    ref={rootElement}
                    tabIndex={open ? '0' : '-1'}
                    {...props}
                />
            </Modal>
        </CSSTransition>
    );
}

MenuSurface.displayName = 'MDCMenuSurface';

MenuSurface.propTypes = {
    open: PropTypes.bool,
    anchor: PropTypes.object,
    top: PropTypes.bool,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    onClose: PropTypes.func
};