import React from 'react';
import classnames from 'classnames';

export default function DialogBody({ element = 'section', scrollable, className, children, ...props }) {
    return React.createElement(element,
        {
            className: classnames('mdc-dialog__body', {
                'mdc-dialog__body--scrollable': scrollable
            }, className),
            ...props
        },
        
        children
    );
};