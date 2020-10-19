import React from 'react';

export default React.forwardRef(DialogContent);

function DialogContent(props, ref) {
    return (
        <div ref={ref} className="mdc-dialog__content" {...props} />
    );
}

DialogContent.displayName = 'MDCDialogContent';