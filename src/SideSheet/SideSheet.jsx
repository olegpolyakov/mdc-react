import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated, useEffect } from '../lifecycle-hooks';
import Layer from '../Layer';
import SideSheetHeader from './SideSheetHeader';
import SideSheetContent from './SideSheetContent';

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

export default React.forwardRef(SideSheet);

function SideSheet({
    title,
    content,
    open = false,
    appear = false,
    dismissible = false,
    modal = false,
    closeIcon,
    appContentSelector,
    onClose = Function.prototype,

    element = 'aside',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        if (!dismissible) return;

        const appContentElement = appContentSelector ?
            document.querySelector(appContentSelector) :
            rootRef.current.nextElementSibling;

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
                    ref={rootRef}
                    className={classNames}
                    {...props}
                >
                    {(title || closeIcon) &&
                        <SideSheetHeader
                            title={title}
                            onClose={onClose}
                            closeIcon={closeIcon}
                        />
                    }

                    {content &&
                        <SideSheetContent>
                            {content}
                        </SideSheetContent>
                    }

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

SideSheet.displayName = 'MDCSideSheet';

SideSheet.propTypes = {
    title: PropTypes.string,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    onClose: PropTypes.func
};