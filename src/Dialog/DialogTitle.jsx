import React from 'react';

export default function DialogTitle({ children }) {
    return React.isValidElement(children) ?
        React.cloneElement(children, {
            className: 'mdc-dialog__title'
        })
        :
        <h2 className="mdc-dialog__title">{children}</h2>;
}

DialogTitle.displayName = 'MDCDialogTitle';