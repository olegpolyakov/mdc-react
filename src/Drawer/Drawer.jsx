import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';

export default function Drawer({
    open = false,
    dismissible = false,
    modal = false,
    onClose = Function.prototype,

    element = 'aside',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const rootElement = React.useRef();

    const classNames = classnames('mdc-drawer', {
        'mdc-drawer--dismissible': dismissible,
        'mdc-drawer--modal': modal
    }, className);

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
    }, [open]);
    
    return (
        <CSSTransition
            in={open}
            appear={true}
            timeout={{
                enter: 250,
                exit: 200
            }}
            classNames={{
                appear: 'mdc-drawer--open',
                enter: 'mdc-drawer--open mdc-drawer--animate',
                enterActive: 'mdc-drawer--open mdc-drawer--opening',
                enterDone: 'mdc-drawer--open',
                exit: 'mdc-drawer--open mdc-drawer--closing',
                exitActive: 'mdc-drawer--closing'
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
                        className="mdc-drawer-scrim"
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

Drawer.displayName = 'MDCDrawer';

Drawer.propTypes = {
    open: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    onClose: PropTypes.func
};