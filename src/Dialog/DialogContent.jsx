import React from 'react';

export default function DialogContent({ children }) {
    return (
        <div className="mdc-dialog__content">
            {children}
        </div>
    );
}

DialogContent.displayName = 'MDCDialogContent';