import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DialogTitle);

function DialogTitle({ children }, ref) {
    return React.isValidElement(children) ?
        React.cloneElement(children, {
            ref,
            className: classnames('mdc-dialog__title', children.props.className)
        })
        :
        <h2 ref={ref} className="mdc-dialog__title">{children}</h2>;
}

DialogTitle.displayName = 'MDCDialogTitle';