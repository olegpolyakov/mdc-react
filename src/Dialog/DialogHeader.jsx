import React from 'react';
import classnames from 'classnames';

export default function DialogHeader({ element = 'header', title, className, children, ...props }) {
    return React.createElement(
        element,
        
        {
            className: classnames('mdc-dialog__header', className)
        },
        
        typeof title === 'string' ?
            React.createElement('h2', { className: 'mdc-dialog__header__title' }, title)
            :
            React.cloneElement(title, { className: 'mdc-dialog__header__title' })
    );
};