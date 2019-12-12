import React from 'react';

export default function DialogActions({ children }) {
    return (
        <div className="mdc-dialog__actions">
            {React.Children.map(children, action =>
                React.cloneElement(action, { className: 'mdc-dialog__button' })
            )}
        </div>
    );
}

DialogActions.displayName = 'MDCDialogActions';