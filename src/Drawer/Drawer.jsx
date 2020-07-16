import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated, useEffect } from '../lifecycle-hooks';
import Layer from '../Layer';

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

export default function Drawer({
    open = false,
    appear = true,
    dismissible = false,
    modal = false,
    appContentSelector,
    onClose = Function.prototype,

    element = 'aside',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const rootElement = useRef();

    useEffect(() => {
        if (!dismissible) return;

        const appContentElement = appContentSelector ?
            document.querySelector(appContentSelector) :
            rootElement.current.nextElementSibling;

        appContentElement.classList.add(cssClasses.APP_CONTENT);

        return () => appContentElement.classList.remove(cssClasses.APP_CONTENT);
    }, [dismissible, appContentSelector]);

    useUpdated(() => {
        if (!modal) return;

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
    }, [open, modal]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.DISMISSIBLE]: dismissible,
        [cssClasses.MODAL]: modal
    }, className);

    return (
        <Layer
            modal={modal}
            fixed={modal}
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
            <>
                <Element
                    ref={rootElement}
                    className={classNames}
                    {...props}
                >
                    {children}
                </Element>

                {modal &&
                    <div
                        className={cssClasses.SCRIM}
                        onClick={onClose}
                    />
                }
            </>
        </Layer>
    );
}

Drawer.displayName = 'MDCDrawer';

Drawer.propTypes = {
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    appContentSelector: PropTypes.string,
    onClose: PropTypes.func
};