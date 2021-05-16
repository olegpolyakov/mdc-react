import React, { useRef, useState, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated, useDestroyed } from '../lifecycle-hooks';
import Layer from '../Layer';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const cssClasses = {
    BASE: 'mdc-dialog',
    HEADER: 'mdc-dialog__header',
    CONTENT: 'mdc-dialog__content',
    CONTAINER: 'mdc-dialog__container',
    SURFACE: 'mdc-dialog__surface',
    SCRIM: 'mdc-dialog__scrim',

    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    CLOSING: 'mdc-dialog--closing',
    SCROLLABLE: 'mdc-dialog--scrollable',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock'
};

export default React.forwardRef(Dialog);

function Dialog({
    title,
    closeIcon,
    content,
    actions,
    open = false,
    appear = false,
    persistent = false,
    fullscreen = false,
    onClose = Function.prototype,

    element: Element = 'div',
    className,
    children = content,
    ...props
}, ref) {
    const rootRef = useRef();
    const contentRef = useRef();

    const [isScrollable, setScrollable] = useState(false);

    const classNames = classnames(cssClasses.BASE, {
        [cssClasses.SCROLLABLE]: isScrollable,
        [cssClasses.FULLSCREEN]: fullscreen
    }, className);

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
        const contentElement = contentRef.current;
        const shouldScroll = contentElement ? contentElement.scrollHeight > contentElement.offsetHeight : false;

        if (open && shouldScroll) {
            rootRef.current.classList.add(cssClasses.SCROLLABLE);
        } else if (!open && shouldScroll) {
            rootRef.current.classList.remove(cssClasses.SCROLLABLE);
        }
    }, [open]);

    useUpdated(() => {
        if (!fullscreen) return;

        const contentElement = contentRef.current;

        function handleScroll() {
            const isScrollAtTop = contentElement ? contentElement.scrollTop === 0 : false;
            const isScrollAtBottom = contentElement ? Math.ceil(contentElement.scrollHeight - contentElement.scrollTop) === contentElement.clientHeight :
                false;

            rootRef.current.classList.toggle(cssClasses.SCROLL_DIVIDER_HEADER, !isScrollAtTop);
            rootRef.current.classList.toggle(cssClasses.SCROLL_DIVIDER_FOOTER, !isScrollAtBottom);
        }

        contentElement?.addEventListener('scroll', handleScroll);

        return () => contentElement?.removeEventListener('scroll', handleScroll);
    }, [open, fullscreen]);

    useDestroyed(() => document.body.classList.remove(cssClasses.SCROLL_LOCK));

    const handleEnter = useCallback(() => {
        document.body.classList.add(cssClasses.SCROLL_LOCK);
    }, []);

    const handleExited = useCallback(() => {
        document.body.classList.remove(cssClasses.SCROLL_LOCK);
    }, []);

    const handleScrimClick = useCallback(() => {
        if (persistent) return;

        onClose();
    }, [persistent, onClose]);

    return (
        <Layer
            modal
            in={open}
            appear={appear}
            timeout={{ enter: 150, exit: 75 }}
            classNames={{
                appear: cssClasses.OPENING,
                appearActive: cssClasses.OPEN,
                enter: cssClasses.OPENING,
                enterActive: cssClasses.OPEN,
                enterDone: cssClasses.OPEN,
                exit: cssClasses.CLOSING
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
                <div className={cssClasses.CONTAINER}>
                    <div
                        role="alertdialog"
                        aria-modal="true"
                        className={cssClasses.SURFACE}
                    >
                        {title &&
                            <DialogHeader
                                title={title}
                                closeIcon={closeIcon}
                                fullscreen={fullscreen}
                                onClose={onClose}
                            />
                        }

                        {children &&
                            <DialogContent ref={contentRef}>{children}</DialogContent>
                        }

                        {actions &&
                            <DialogActions>{actions}</DialogActions>
                        }
                    </div>
                </div>

                <div className={cssClasses.SCRIM} onClick={handleScrimClick} />
            </Element>
        </Layer>
    );
}

Dialog.displayName = 'MDCDialog';

Dialog.propTypes = {
    title: PropTypes.node,
    closeIcon: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.arrayOf(PropTypes.node),
    open: PropTypes.bool,
    appear: PropTypes.bool,
    confirmation: PropTypes.bool,
    persistent: PropTypes.bool,
    fullscreen: PropTypes.bool,
    onClose: PropTypes.func
};