import { forwardRef, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../hooks';
import { Clone } from '../component';
import Layer from '../layer';
import IconButton from '../icon-button';

import { numbers, cssClasses } from './constants';

const Snackbar = forwardRef(({
    label,
    action,
    dismissIcon = 'close',
    open = false,
    appear = false,
    leading = false,
    stacked = false,
    dismissible = true,
    timeout = numbers.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,
    closeOnEscape = true,
    onClose = Function.prototype,

    element: Element = 'div',
    className,
    children = label,
    ...props
}, ref) => {
    const timeoutRef = useRef();

    useUpdated(() => {
        if (open) {
            timeoutRef.current = setTimeout(() => {
                timeoutRef.current = null;
                onClose();
            }, timeout);
        } else {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        }

        return () => clearTimeout(timeoutRef.current);
    }, [open]);

    const handleKeyDown = useCallback(event => {
        if (closeOnEscape && event.key === 'Escape' || event.keyCode === 27) {
            onClose();
        }
    }, [closeOnEscape, onClose]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.LEADING]: leading,
        [cssClasses.STACKED]: stacked
    }, className);

    return (
        <Layer
            modal
            in={open}
            appear={appear}
            timeout={{
                enter: numbers.ANIMATION_OPEN_TIME_MS,
                exit: numbers.ANIMATION_CLOSE_TIME_MS
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
        >
            <Element
                ref={ref}
                className={classNames}
                onKeyDown={handleKeyDown}
                {...props}
            >
                <div
                    className={cssClasses.SURFACE}
                    role="status"
                    aria-relevant="additions"
                >
                    <div className={cssClasses.LABEL} aria-atomic="false">{children}</div>

                    <div className={cssClasses.ACTIONS} aria-atomic="true">
                        {action &&
                            <Clone
                                component={action}
                                className={cssClasses.ACTION}
                            />
                        }

                        {dismissible &&
                            <Clone
                                component={dismissIcon}
                                fallback={IconButton}
                                className={cssClasses.DISMISS}
                                onClick={onClose}
                            />
                        }
                    </div>
                </div>
            </Element>
        </Layer>
    );
});

Snackbar.displayName = 'MDCSnackbar';

Snackbar.propTypes = {
    label: PropTypes.string,
    action: PropTypes.element,
    dismissIcon: PropTypes.node,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    leading: PropTypes.bool,
    stacked: PropTypes.bool,
    dismissible: PropTypes.bool,
    timeout: PropTypes.number,
    closeOnEscape: PropTypes.bool,
    onClose: PropTypes.func
};

export default Snackbar;