import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import Modal from '../Modal';
import Icon from '../Icon';
import IconButton from '../IconButton';

export default function Snackbar({
    label,
    action,
    open = false,
    appear = false,
    leading = false,
    stacked = false,
    dismissable = true,
    timeout = 5000,
    closeOnEscape = true,
    onClose = Function.prototype,

    className,
    children = label,
    ...props
}) {
    const timeoutRef = React.useRef();

    const classNames = classnames('mdc-snackbar', {
        'mdc-snackbar--leading': leading,
        'mdc-snackbar--stacked': stacked
    }, className);

    function handleKeyDown(event) {
        if (closeOnEscape && event.key === 'Escape' || event.keyCode === 27) {
            onClose();
        }
    }

    function handleDismiss() {
        onClose();
    }

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
    }, [open]);

    return (
        <CSSTransition
            in={open}
            timeout={{ enter: 150, exit: 75 }}
            classNames={{
                appear: 'mdc-snackbar--opening',
                appearActive: 'mdc-snackbar--open',
                enter: 'mdc-snackbar--opening',
                enterActive: 'mdc-snackbar--open',
                enterDone: 'mdc-snackbar--open',
                exit: 'mdc-snackbar--closing'
            }}
            appear={appear}
            mountOnEnter
            unmountOnExit
        >
            <Modal>
                <div
                    className={classNames}
                    onKeyDown={handleKeyDown}
                    {...props}
                >
                    <div className="mdc-snackbar__surface">
                        <div className="mdc-snackbar__label" role="status" aria-level="polite">{children}</div>

                        <div className="mdc-snackbar__actions">
                            {action &&
                                React.cloneElement(action, { className: 'mdc-snackbar__action' })
                            }

                            {dismissable &&
                                <IconButton className="mdc-snackbar__dismiss" onClick={handleDismiss}>
                                    <Icon>close</Icon>
                                </IconButton>
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </CSSTransition>
    );
}

Snackbar.displayName = 'MDCSnackbar';

Snackbar.propTypes = {
    open: PropTypes.bool,
    appear: PropTypes.bool,
    leading: PropTypes.bool,
    stacked: PropTypes.bool,
    timeout: PropTypes.number,
    closeOnEscape: PropTypes.bool,
    onClose: PropTypes.func
};