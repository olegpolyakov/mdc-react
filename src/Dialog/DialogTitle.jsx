import React from 'react';

export default React.forwardRef(DialogTitle);

function DialogTitle({ children }, ref) {
    return React.isValidElement(children) ?
        React.cloneElement(children, {
            ref,
            className: 'mdc-dialog__title'
        })
        :
        <h2 ref={ref} className="mdc-dialog__title">{children}</h2>;
}

DialogTitle.displayName = 'MDCDialogTitle';