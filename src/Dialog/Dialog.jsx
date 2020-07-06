import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useUpdated, useUpdatedLayout } from '../lifecycle-hooks';
import Modal from '../Modal';
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

export default function Dialog({
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
}) {
    const rootElement = useRef();
    const classNames = classnames('mdc-dialog', className);

    useUpdated(() => {
        if (open) {
            document.body.classList.add(cssClasses.SCROLL_LOCK);
        } else {
            document.body.classList.remove(cssClasses.SCROLL_LOCK);
        }
    }, [open]);

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
    }, [open, persistent]);

    useUpdated(() => {
        const contentElement = rootElement.current.querySelector('.mdc-dialog__content');
        const shouldScroll = contentElement ? contentElement.scrollHeight > contentElement.offsetHeight : false;

        if (open && shouldScroll) {
            rootElement.current.classList.add(cssClasses.SCROLLABLE);
        } else if (!open && shouldScroll) {
            rootElement.current.classList.remove(cssClasses.SCROLLABLE);
        }
    }, [open]);

    const handleScrimClick = useCallback(() => {
        if (persistent) return;

        onClose();
    }, [persistent]);

    return (
        <CSSTransition
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
            mountOnEnter
            unmountOnExit
        >
            <Modal>
                <Element
                    className={classNames}
                    ref={rootElement}
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
            </Modal>
        </CSSTransition>
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