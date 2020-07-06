import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';

export default function Drawer({
    open = false,
    appear = true,
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
            rootElement.current.nextElementSibling.classList.add('mdc-drawer-app-content');
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
                        {children}
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
                    {children}
                </Element>
            }
        </CSSTransition>
    );
}

const cssClasses = {
    ROOT: 'mdc-drawer',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    ANIMATE: 'mdc-drawer--animate',
    OPENING: 'mdc-drawer--opening',
    CLOSING: 'mdc-drawer--closing',
    APP_CONTENT: 'mdc-drawer-app-content',
    SCRIM: 'mdc-drawer-scrim',
};

Drawer.displayName = 'MDCDrawer';

Drawer.propTypes = {
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    onClose: PropTypes.func
};