import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { clone, Clone } from '../component';
import { useUpdated, useUnmounted } from '../hooks';
import IconButton from '../icon-button';
import Layer from '../layer';

import { numbers, cssClasses } from './constants';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogActions from './DialogActions';

const Dialog = forwardRef(({
    title,
    header,
    content,
    actions,
    closeIcon,
    open = false,
    appear = false,
    fullscreen = false,
    persistent = false,
    sheet = false,
    stacked = false,
    autoStackButtons = false,
    noContentPadding,
    onClose = Function.prototype,

    element: Element = 'div',
    className,
    children = content,
    ...props
}, ref) => {
    const rootRef = useRef();
    const contentRef = useRef();
    const actionsRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useUpdated(() => {
        if (persistent) return;

        function handleDocumentKeyDown(event) {
            if (event.key === 'Escape' || event.keyCode === 27) {
                event.stopPropagation();
                onClose();
            }
        }

        if (open) {
            document.addEventListener('keydown', handleDocumentKeyDown);
        } else {
            document.removeEventListener('keydown', handleDocumentKeyDown);
        }

        return () => document.removeEventListener('keydown', handleDocumentKeyDown);
    }, [open, persistent, onClose]);

    useUpdated(() => {
        if (!contentRef.current || !open) return;

        const contentElement = contentRef.current;
        const shouldScroll = contentElement.scrollHeight > contentElement.offsetHeight;

        if (shouldScroll) {
            rootRef.current.classList.add(cssClasses.SCROLLABLE);
        }
    }, [open]);

    useUpdated(() => {
        if (!actionsRef.current || !open || !autoStackButtons) return;

        const actionsElement = actionsRef.current;

        if (actionsElement.clientHeight > numbers.DEFAULT_ACTIONS_HEIGHT) {
            rootRef.current.classList.add(cssClasses.STACKED);
        }
    }, [open, autoStackButtons]);

    useUpdated(() => {
        if (!contentRef.current || !fullscreen) return;

        const contentElement = contentRef.current;

        function handleScroll() {
            const isScrollAtTop = contentElement.scrollTop === 0;
            const isScrollAtBottom = Math.ceil(contentElement.scrollHeight - contentElement.scrollTop) === contentElement.clientHeight;

            rootRef.current.classList.toggle(cssClasses.SCROLL_DIVIDER_HEADER, !isScrollAtTop);
            rootRef.current.classList.toggle(cssClasses.SCROLL_DIVIDER_FOOTER, !isScrollAtBottom);
        }

        contentElement.addEventListener('scroll', handleScroll);

        if (open) {
            handleScroll();
        }

        return () => contentElement.removeEventListener('scroll', handleScroll);
    }, [open, fullscreen]);

    useUnmounted(() => {
        document.body.classList.remove(cssClasses.SCROLL_LOCK);
    });

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

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FULLSCREEN]: fullscreen,
        [cssClasses.SHEET]: sheet,
        [cssClasses.STACKED]: stacked,
        [cssClasses.NO_CONTENT_PADDING]: noContentPadding
    }, className);

    return (
        <Layer
            modal
            in={open}
            appear={appear}
            timeout={{
                enter: numbers.DIALOG_ANIMATION_OPEN_TIME_MS,
                exit: numbers.DIALOG_ANIMATION_CLOSE_TIME_MS
            }}
            classNames={{
                appear: cssClasses.OPENING,
                appearActive: cssClasses.OPEN,
                enter: cssClasses.OPENING,
                enterActive: cssClasses.OPEN,
                enterDone: cssClasses.OPEN,
                exit: cssClasses.CLOSING
            }}
            mountOnEnter
            unmountOnExit
            onEnter={handleEnter}
            onExited={handleExited}
        >
            <Element
                ref={rootRef}
                className={classNames}
                {...props}
            >
                <div className={cssClasses.CONTAINER}>
                    <div
                        className={cssClasses.SURFACE}
                        role="alertdialog"
                        aria-modal="true"
                    >
                        {sheet &&
                            <Clone
                                component={closeIcon}
                                fallback={<IconButton icon="close" />}
                                className={cssClasses.CLOSE}
                                onClick={onClose}
                            />
                        }

                        {title &&
                            <DialogHeader
                                title={title}
                                closeIcon={closeIcon}
                                fullscreen={fullscreen}
                                onClose={onClose}
                            />
                        }

                        {header?.type === DialogHeader &&
                            clone(header, {
                                fullscreen,
                                onClose
                            })
                        }

                        {children && (children?.type === DialogContent ?
                            clone(children, {
                                ref: contentRef
                            })
                            :
                            <DialogContent ref={contentRef}>{children}</DialogContent>
                        )}

                        {actions && (actions.type === DialogActions ?
                            clone(actions, {
                                ref: actionsRef
                            })
                            :
                            <DialogActions ref={actionsRef}>{actions}</DialogActions>
                        )}
                    </div>
                </div>

                <div className={cssClasses.SCRIM} onClick={handleScrimClick} />
            </Element>
        </Layer>
    );
});

Dialog.displayName = 'MDCDialog';

Dialog.propTypes = {
    title: PropTypes.node,
    header: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]),
    closeIcon: PropTypes.node,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    fullscreen: PropTypes.bool,
    persistent: PropTypes.bool,
    sheet: PropTypes.bool,
    stacked: PropTypes.bool,
    autoStackButtons: PropTypes.bool,
    noContentPadding: PropTypes.bool,
    onClose: PropTypes.func
};

export default Dialog;