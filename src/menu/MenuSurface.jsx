import { forwardRef, useRef, useImperativeHandle, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../hooks';
import { clone } from '../component';
import Layer from '../layer';

import { numbers, cssClasses, Origin } from './constants';
import { getAnchorOrigin } from './utils';

const MenuSurface = forwardRef(({
    anchor,
    anchorRef: _anchorRef,
    anchorOrigin: _anchorOrigin = Origin.TOP_LEFT,
    transformOrigin: _transformOrigin = _anchorOrigin,
    open = false,
    modal = false,
    quick = false,
    fixed = false,
    persistent = false,
    fullWidth = false,
    onClose = Function.prototype,
    onKeyDown = Function.prototype,

    className,
    ...props
}, ref) => {
    const rootRef = useRef();
    const anchorRef = useRef(_anchorRef?.current);

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        if (!_anchorRef) return;

        anchorRef.current = _anchorRef.current;
    }, [_anchorRef]);

    useUpdated(() => {
        if (!open || persistent) return;

        function handleBodyClick(event) {
            onClose(event);
        }

        document.body.addEventListener('click', handleBodyClick, true);

        return () => {
            document.body.removeEventListener('click', handleBodyClick, true);
        };
    }, [open, persistent, onClose]);

    useUpdated(() => {
        if (!open || !rootRef.current || !anchorRef.current) return;

        const anchor = anchorRef.current;
        const { clientWidth: width, clientHeight: height } = rootRef.current;
        const anchorClientRect = anchor.getBoundingClientRect();
        const anchorDimensions = modal ? anchorClientRect : {
            top: anchor.offsetTop,
            left: anchor.offsetLeft,
            bottom: anchor.offsetTop + anchor.offsetHeight,
            right: anchor.offsetLeft + anchor.offsetWidth,
            width: anchor.offsetWidth,
            height: anchor.offsetHeight
        };

        const style = {
            top: anchorDimensions.top,
            left: anchorDimensions.left,
            width: fullWidth ? '100%' : undefined,
            maxWidth: fullWidth ? `${anchorDimensions.width}px` : undefined,
            position: fixed ? 'fixed' : 'absolute',
            transformOrigin: _transformOrigin
        };

        const scrollY = (modal ? window.scrollY : 0);
        const scrollX = (modal ? window.scrollX : 0);

        const anchorOrigin = getAnchorOrigin(_anchorOrigin);
        const transformOrigin = getAnchorOrigin(_transformOrigin);

        if (anchorOrigin.top) {
            style.top = anchorDimensions.top;
        } else if (anchorOrigin.bottom) {
            style.top = anchorDimensions.bottom;
        }

        if (anchorOrigin.left) {
            style.left = anchorDimensions.left;
        } else if (anchorOrigin.right) {
            style.left = anchorDimensions.right;
        }

        if (transformOrigin.top) {
            const top = scrollY + style.top;
            const bottomOverflow = scrollY + (anchorOrigin.bottom ? anchorClientRect.bottom : anchorClientRect.top) + height - window.innerHeight;

            style.top = bottomOverflow > 0 ? (top - bottomOverflow) : top;
        } else if (transformOrigin.bottom) {
            const top = scrollY + style.top - height;
            const topOverflow = scrollY + (anchorOrigin.bottom ? anchorClientRect.bottom : anchorClientRect.top) - height;

            style.top = topOverflow > 0 ? top : 0;
        }

        if (transformOrigin.left) {
            const left = style.left;
            const rightOverflow = scrollX + window.innerWidth - (anchorOrigin.left ? anchorClientRect.left : anchorClientRect.right) + width;

            style.left = rightOverflow > 0 ? left : left - Math.abs(rightOverflow);
        } else if (transformOrigin.right) {
            const left = style.left - width;
            const leftOverflow = scrollX + (anchorOrigin.right ? anchorClientRect.right : anchorClientRect.left) - width;

            style.left = leftOverflow > 0 ? left : 0;
        }

        rootRef.current.style.top = `${style.top}px`;
        rootRef.current.style.left = `${style.left}px`;
        rootRef.current.style.position = style.position;
        rootRef.current.style.width = style.width;
        rootRef.current.style.maxWidth = style.maxWidth;
        rootRef.current.style.transformOrigin = style.transformOrigin;
    }, [open, modal, _anchorOrigin, _transformOrigin]);

    const handleKeyDown = useCallback(event => {
        if (event.key === 'Escape' && !persistent) {
            event.stopPropagation();
            onClose(event);
        }

        onKeyDown(event);
    }, [persistent, onKeyDown, onClose]);

    const isBelowAnchor = (
        _anchorOrigin.includes('bottom') &&
        _transformOrigin.includes('top')
    );

    const classNames = classnames(cssClasses.SURFACE, {
        [cssClasses.SURFACE_FIXED]: fixed,
        [cssClasses.SURFACE_BELOW_ANCHOR]: isBelowAnchor
    }, className);

    return (<>
        {anchor &&
            clone(anchor, { ref: anchorRef })
        }

        <Layer
            in={open}
            modal={modal}
            timeout={quick ? 0 : {
                enter: numbers.TRANSITION_OPEN_DURATION,
                exit: numbers.TRANSITION_CLOSE_DURATION
            }}
            classNames={quick ? {
                enterDone: cssClasses.SURFACE_OPEN,
            } : {
                enter: cssClasses.SURFACE_ANIMATING_OPEN,
                enterActive: cssClasses.SURFACE_ANIMATING_OPEN,
                enterDone: cssClasses.SURFACE_OPEN,
                exit: cssClasses.SURFACE_OPEN,
                exitActive: cssClasses.SURFACE_ANIMATING_CLOSED
            }}
            mountOnEnter
            unmountOnExit
        >
            <div
                ref={rootRef}
                className={classNames}
                onKeyDown={handleKeyDown}
                {...props}
            />
        </Layer>
    </>);
});

MenuSurface.displayName = 'MDCMenuSurface';

MenuSurface.propTypes = {
    anchor: PropTypes.element,
    anchorRef: PropTypes.object,
    anchorOrigin: PropTypes.oneOf(Object.values(Origin)),
    open: PropTypes.bool,
    modal: PropTypes.bool,
    quick: PropTypes.bool,
    fixed: PropTypes.bool,
    persistent: PropTypes.bool,
    fullWidth: PropTypes.bool,
    onClose: PropTypes.func
};

export default MenuSurface;