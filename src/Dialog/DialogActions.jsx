import React from 'react';

export default React.forwardRef(DialogActions);

function DialogActions({ children }, ref) {
    return (
        <div ref={ref} className="mdc-dialog__actions">
            {React.Children.map(children, action =>
                React.cloneElement(action, { className: 'mdc-dialog__button' })
            )}
        </div>
    );
}

DialogActions.displayName = 'MDCDialogActions';