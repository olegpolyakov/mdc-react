import React from 'react';

export default React.forwardRef(DialogContent);

function DialogContent({ children }, ref) {
    return (
        <div ref={ref} className="mdc-dialog__content">
            {children}
        </div>
    );
}

DialogContent.displayName = 'MDCDialogContent';