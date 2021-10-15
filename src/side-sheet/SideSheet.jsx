import { forwardRef, useRef, useImperativeHandle, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Layer from '../layer';

import { numbers, cssClasses } from './constants';
import SideSheetHeader from './SideSheetHeader';
import SideSheetContent from './SideSheetContent';

const SideSheet = forwardRef(({
    title,
    content,
    closeIcon,
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
}, ref) => {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        if (!dismissible) return;

        const appContentElement = appContentSelector ?
            document.querySelector(appContentSelector) :
            rootRef.current.nextElementSibling;

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
            in={open}
            appear={appear}
            modal={modal}
            fixed={modal}
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
});

SideSheet.displayName = 'MDCSideSheet';

SideSheet.propTypes = {
    title: PropTypes.string,
    content: PropTypes.node,
    closeIcon: PropTypes.node,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    dismissible: PropTypes.bool,
    modal: PropTypes.bool,
    appContentSelector: PropTypes.string,
    onClose: PropTypes.func
};

export default SideSheet;