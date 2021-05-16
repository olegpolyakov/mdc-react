import React from 'react';
import classnames from 'classnames';

import IconButton from '../IconButton';

export default React.forwardRef(DialogHeader);

function DialogHeader({ title, closeIcon, fullscreen, children, onClose }, ref) {
    return (
        <div className="mdc-dialog__header">
            {React.isValidElement(children) ?
                React.cloneElement(children, {
                    ref,
                    className: classnames('mdc-dialog__title', title.props.className)
                })
                :
                <h2 className="mdc-dialog__title">{title}</h2>
            }

            {(fullscreen || closeIcon) && (React.isValidElement(closeIcon) ?
                React.cloneElement(closeIcon, {
                    ref,
                    className: classnames('mdc-dialog__close', closeIcon.props.className),
                    onClick: onClose
                })
                :
                <IconButton
                    className="mdc-dialog__close"
                    icon="close"
                    onClick={onClose}
                />
            )}

            {children}
        </div>
    );
}

DialogHeader.displayName = 'MDCDialogHeader';