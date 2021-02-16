import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Layer from '../Layer';
import IconButton from '../IconButton';

export default React.forwardRef(Snackbar);

function Snackbar({
    label,
    action,
    open = false,
    appear = false,
    leading = false,
    stacked = false,
    dismissible = true,
    timeout = 5000,
    closeOnEscape = true,
    onClose = Function.prototype,

    element: Element = 'div',
    className,
    children = label,
    ...props
}, ref) {
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

    const classNames = classnames('mdc-snackbar', {
        'mdc-snackbar--leading': leading,
        'mdc-snackbar--stacked': stacked
    }, className);

    return (
        <Layer
            modal
            in={open}
            appear={appear}
            timeout={{ enter: 150, exit: 75 }}
            classNames={{
                appear: 'mdc-snackbar--opening',
                appearActive: 'mdc-snackbar--open',
                enter: 'mdc-snackbar--opening',
                enterActive: 'mdc-snackbar--open',
                enterDone: 'mdc-snackbar--open',
                exit: 'mdc-snackbar--closing'
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
                <div className="mdc-snackbar__surface">
                    <div className="mdc-snackbar__label" role="status" aria-live="polite">{children}</div>

                    <div className="mdc-snackbar__actions">
                        {action &&
                            React.cloneElement(action, {
                                className: classnames('mdc-snackbar__action', action.props.className)
                            })
                        }

                        {dismissible &&
                            <IconButton className="mdc-snackbar__dismiss" icon="close" onClick={onClose} />
                        }
                    </div>
                </div>
            </Element>
        </Layer>
    );
}

Snackbar.displayName = 'MDCSnackbar';

Snackbar.propTypes = {
    label: PropTypes.string,
    action: PropTypes.element,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    leading: PropTypes.bool,
    stacked: PropTypes.bool,
    dismissible: PropTypes.bool,
    timeout: PropTypes.number,
    closeOnEscape: PropTypes.bool,
    onClose: PropTypes.func
};