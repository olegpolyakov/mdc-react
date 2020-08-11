import React, { useRef, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Layer from '../Layer';
import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const cssClasses = {
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    CLOSING: 'mdc-dialog--closing',
    SCROLLABLE: 'mdc-dialog--scrollable',
    STACKED: 'mdc-dialog--stacked',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock'
};

export default React.forwardRef(Dialog);

function Dialog({
    title,
    content,
    actions,
    open = false,
    appear = false,
    persistent = false,
    onClose = Function.prototype,

    element: Element = 'div',
    className,
    children,
    ...props
}, ref) {
    const rootRef = useRef();
    const classNames = classnames('mdc-dialog', className);

    useImperativeHandle(ref, () => rootRef.current);

    useUpdated(() => {
        if (persistent) return;

        function handleDocumentKeyDown(event) {
            if (event.key && event.key === 'Escape' || event.keyCode === 27) {
                onClose();
            }
        }

        if (open) {
            document.addEventListener('keydown', handleDocumentKeyDown);
        } else {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        }

        return () => document.removeEventListener('keydown', handleDocumentKeyDown);
    }, [open, persistent]);

    useUpdated(() => {
        const contentElement = rootRef.current.querySelector('.mdc-dialog__content');
        const shouldScroll = contentElement ? contentElement.scrollHeight > contentElement.offsetHeight : false;

        if (open && shouldScroll) {
            rootRef.current.classList.add(cssClasses.SCROLLABLE);
        } else if (!open && shouldScroll) {
            rootRef.current.classList.remove(cssClasses.SCROLLABLE);
        }

        return () => rootRef.current.classList.remove(cssClasses.SCROLLABLE);
    }, [open]);

    const handleEnter = useCallback(() => {
        document.body.classList.add(cssClasses.SCROLL_LOCK);
    }, []);

    const handleExited = useCallback(() => {
        document.body.classList.remove(cssClasses.SCROLL_LOCK);
    }, []);

    const handleScrimClick = useCallback(() => {
        if (persistent) return;

        onClose();
    }, [persistent]);

    return (
        <Layer
            modal
            in={open}
            appear={appear}
            timeout={{ enter: 150, exit: 75 }}
            classNames={{
                appear: 'mdc-dialog--opening',
                appearActive: 'mdc-dialog--open',
                enter: 'mdc-dialog--opening',
                enterActive: 'mdc-dialog--open',
                enterDone: 'mdc-dialog--open',
                exit: 'mdc-dialog--closing'
            }}
            onEnter={handleEnter}
            onExited={handleExited}
            mountOnEnter
            unmountOnExit
        >
            <Element
                ref={rootRef}
                className={classNames}
                {...props}
            >
                <div className="mdc-dialog__container">
                    <div
                        role="alertdialog"
                        aria-modal="true"
                        className="mdc-dialog__surface"
                    >
                        {title &&
                            <DialogTitle>{title}</DialogTitle>
                        }

                        {content &&
                            <DialogContent>{content}</DialogContent>
                        }

                        {actions &&
                            <DialogActions>{actions}</DialogActions>
                        }

                        {children}
                    </div>
                </div>

                <div className="mdc-dialog__scrim" onClick={handleScrimClick} />
            </Element>
        </Layer>
    );
}

Dialog.displayName = 'MDCDialog';

Dialog.propTypes = {
    title: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.arrayOf(PropTypes.node),
    open: PropTypes.bool,
    appear: PropTypes.bool,
    confirmation: PropTypes.bool,
    onClose: PropTypes.func
};