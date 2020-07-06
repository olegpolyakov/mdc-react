import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';

export default function SideSheet({
    title,
    open = false,
    appear = false,
    dismissible = false,
    modal = false,
    onClose = Function.prototype,

    element = 'aside',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const rootElement = useRef();

    useMounted(() => {
        if (dismissible) {
            rootElement.current.nextElementSibling.classList.add(cssClasses.APP_CONTENT);
        }
    });

    useUpdated(() => {
        function handleDocumentKeyDown(event) {
            if (event.key && event.key === 'Escape' || event.keyCode === 27) {
                onClose();
            }
        }

        if (modal) {
            if (open) {
                document.addEventListener('keydown', handleDocumentKeyDown);
            } else {
                document.removeEventListener('keydown', handleDocumentKeyDown);
            }
        }
    }, [open, modal]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.DISMISSIBLE]: dismissible,
        [cssClasses.MODAL]: modal
    }, className);

    return (
        <CSSTransition
            in={open}
            appear={appear}
            timeout={{
                enter: 250,
                exit: 200
            }}
            classNames={{
                appear: cssClasses.OPEN,
                enter: `${cssClasses.OPEN} ${cssClasses.ANIMATE}`,
                enterActive: `${cssClasses.OPEN} ${cssClasses.OPENING}`,
                enterDone: cssClasses.OPEN,
                exit: `${cssClasses.OPEN} ${cssClasses.CLOSING}`,
                exitActive: cssClasses.CLOSING
            }}
            mountOnEnter={modal}
            unmountOnExit={modal}
        >
            {modal ?
                <Modal fixed>
                    <Element
                        ref={rootElement}
                        className={classNames}
                        {...props}
                    >
                        {title &&
                            <header className="mdc-side-sheet__header">
                                <h3 className="mdc-side-sheet__title">{title}</h3>
                                <i className="mdc-icon mdc-icon-button material-icons mdc-side-sheet__close-button" onClick={onClose}>close</i>
                            </header>
                        }

                        <section className="mdc-side-sheet__content">
                            {children}
                        </section>
                    </Element>

                    <div
                        className={cssClasses.SCRIM}
                        onClick={onClose}
                    />
                </Modal>
                :
                <Element
                    ref={rootElement}
                    className={classNames}
                    {...props}
                >
                    {title &&
                        <header className="mdc-side-sheet__header">
                            <h3 className="mdc-side-sheet__title">{title}</h3>
                            <i className="mdc-icon mdc-icon-button material-icons mdc-side-sheet__close-button" onClick={onClose}>close</i>
                        </header>
                    }

                    <section className="mdc-side-sheet__content">
                        {children}
                    </section>
                </Element>
            }
        </CSSTransition>
    );
}

const cssClasses = {
    ROOT: 'mdc-side-sheet',
    CONTENT: 'mdc-side-sheet__content',
    DISMISSIBLE: 'mdc-side-sheet--dismissible',
    MODAL: 'mdc-side-sheet--modal',
    OPEN: 'mdc-side-sheet--open',
    ANIMATE: 'mdc-side-sheet--animate',
    OPENING: 'mdc-side-sheet--opening',
    CLOSING: 'mdc-side-sheet--closing',
    APP_CONTENT: 'mdc-side-sheet-app-content',
    SCRIM: 'mdc-side-sheet-scrim',
};

SideSheet.displayName = 'MDCSideSheet';

SideSheet.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    onClose: PropTypes.func
};