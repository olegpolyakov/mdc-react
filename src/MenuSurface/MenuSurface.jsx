import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Layer from '../Layer';

export default React.forwardRef(MenuSurface);

function MenuSurface({
    anchor,
    open = false,
    top = false,
    left = false,
    bottom = false,
    right = false,
    belowAnchor = false,
    fixed = false,
    fullWidth = false,
    persistent = false,
    onClose = Function.prototype,
    onKeyDown = Function.prototype,

    element,
    className,
    ...props
}, ref) {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useUpdated(() => {
        function handleBodyClick(event) {
            if (!persistent) onClose(event);
        }

        if (open) {
            anchor.classList.add('mdc-menu-surface--anchor');
            document.body.addEventListener('click', handleBodyClick);
        } else {
            anchor.classList.remove('mdc-menu-surface--anchor');
            document.body.removeEventListener('click', handleBodyClick);
        }
    }, [open]);

    useUpdated(() => {
        if (!open || !rootRef.current || !anchor) return;

        const { clientWidth: width, clientHeight: height } = rootRef.current;

        const anchorDimensions = anchor.getBoundingClientRect();
        const style = {
            width: fullWidth ? '100%' : undefined,
            maxWidth: fullWidth ? `${anchorDimensions.width}px` : undefined,
            position: fixed ? 'fixed' : 'absolute',
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
            const top = (belowAnchor ? anchorDimensions.bottom : anchorDimensions.top) + (fixed ? 0 : window.scrollY);
            const bottom = top + height;
            const delta = window.innerHeight - bottom;

            style.top = `${delta > 0 ? top : top - Math.abs(delta)}px`;
            style.transformOrigin += ' top';
        } else if (bottom) {
            const top = anchorDimensions.bottom - height + (fixed ? 0 : window.scrollY);

            style.top = `${top > 0 ? top : 0}px`;
            style.transformOrigin += ' bottom';
        }

        rootRef.current.style.left = style.left;
        rootRef.current.style.top = style.top;
        rootRef.current.style.position = style.position;
        rootRef.current.style.width = style.width;
        rootRef.current.style.maxWidth = style.maxWidth;
        rootRef.current.style.transformOrigin = style.transformOrigin;
    }, [open]);

    const handleKeyDown = useCallback(event => {
        if (event.key === 'Escape' && !persistent) {
            event.stopPropagation();
            onClose(event);
        }

        onKeyDown(event);
    }, []);

    const classNames = classnames('mdc-menu-surface', {
        'mdc-menu-surface--fixed': fixed
    }, className);

    return (
        <Layer
            modal
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
            <div
                ref={rootRef}
                className={classNames}
                tabIndex={open ? '0' : '-1'}
                onKeyDown={handleKeyDown}
                {...props}
            />
        </Layer>
    );
}

MenuSurface.displayName = 'MDCMenuSurface';

MenuSurface.propTypes = {
    anchor: PropTypes.object,
    open: PropTypes.bool,
    top: PropTypes.bool,
    left: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    belowAnchor: PropTypes.bool,
    fixed: PropTypes.bool,
    fullWidth: PropTypes.bool,
    persistent: PropTypes.bool,
    onClose: PropTypes.func
};