import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DialogActions);

function DialogActions({ children }, ref) {
    return (
        <div ref={ref} className="mdc-dialog__actions">
            {React.Children.map(children, action =>
                React.cloneElement(action, {
                    className: classnames('mdc-dialog__button', action.props.className)
                })
            )}
        </div>
    );
}

DialogActions.displayName = 'MDCDialogActions';