import { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layer from '../layer';

import { numbers, cssClasses } from './constants';

const Drawer = forwardRef(({
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
}, ref) => {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        if (!dismissible) return;

        const appContentElement = appContentSelector ?
            document.querySelector(appContentSelector) :
            rootRef.current?.nextElementSibling;

        appContentElement?.classList.add(cssClasses.APP_CONTENT);

        return () => {
            appContentElement?.classList.remove(cssClasses.APP_CONTENT);
        };
    }, [dismissible, appContentSelector]);

    useEffect(() => {
        if (!modal) return;

        function handleDocumentKeyDown(event) {
            if (event.key && event.key === 'Escape' || event.keyCode === 27) {
                onClose();
            }
        }

        document.addEventListener('keydown', handleDocumentKeyDown);

        return () => document.removeEventListener('keydown', handleDocumentKeyDown);
    }, [modal, onClose]);

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
                enter: numbers.ANIMATION_ENTER_TIME_MS,
                exit: numbers.ANIMATION_EXIT_TIME_MS
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
});

Drawer.displayName = 'MDCDrawer';

Drawer.propTypes = {
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    appContentSelector: PropTypes.string,
    onClose: PropTypes.func
};

export default Drawer;