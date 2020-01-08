import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';

const cssClasses = {
    ROOT: 'mdc-side-sheet',
    DISMISSIBLE: 'mdc-side-sheet--dismissible',
    MODAL: 'mdc-side-sheet--modal',
    OPEN: 'mdc-side-sheet--open',
    ANIMATE: 'mdc-side-sheet--animate',
    OPENING: 'mdc-side-sheet--opening',
    CLOSING: 'mdc-side-sheet--closing',
    CONTENT: 'mdc-side-sheet__content',
    APP_CONTENT: 'mdc-side-sheet-app-content',
    SCRIM: 'mdc-side-sheet-scrim'
};

export default function SideSheet({
    open = false,
    appear = false,
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
    const rootElement = React.useRef();
    const scrimElement = React.useRef();

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.DISMISSIBLE]: dismissible,
        [cssClasses.MODAL]: modal
    }, className);

    useMounted(() => {
        if (dismissible && appContentSelector) {
            document.querySelector(appContentSelector).classList.add(cssClasses.APP_CONTENT);
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
            appear={appear}
            timeout={{
                enter: 250,
                exit: 200
            }}
            classNames={{
                appear: `${cssClasses.OPEN}`,
                enter: `${cssClasses.OPEN} ${cssClasses.ANIMATE}`,
                enterActive: `${cssClasses.OPEN} ${cssClasses.OPENING}`,
                enterDone: cssClasses.OPEN,
                exit: `${cssClasses.OPEN} ${cssClasses.CLOSING}`,
                exitActive: `${cssClasses.CLOSING}`
            }}
        >
            <React.Fragment>
                <Element
                    className={classNames}
                    ref={rootElement}
                    {...props}
                >
                    <div className={cssClasses.CONTENT}>
                        {children}
                    </div>
                </Element>

                {modal &&
                    <div
                        className={cssClasses.SCRIM}
                        ref={scrimElement}
                        onClick={onClose}
                    />
                }
            </React.Fragment>
        </CSSTransition>
    );
}

SideSheet.displayName = 'MDCSideSheet';

SideSheet.propTypes = {
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    appContentSelector: PropTypes.string,
    onClose: PropTypes.func
};