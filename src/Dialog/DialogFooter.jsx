import React from 'react';
import classnames from 'classnames';

export default function DialogFooter({ element = 'footer', className, children, ...props }) {
    return React.createElement(
        element,
        
        {
            className: classnames('mdc-dialog__footer', className)
        },
        
        children
    );
};