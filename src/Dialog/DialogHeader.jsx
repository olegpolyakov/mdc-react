import React from 'react';
import classnames from 'classnames';

export default function DialogHeader({ element = 'header', component = element, title, className, children = title, ...props }) {
    return React.createElement(component, {
            className: classnames('mdc-dialog__header', className),
            ...props,
        },
        
        React.isValidElement(children) ?
            React.cloneElement(children, { className: 'mdc-dialog__header__title' })
            :
            React.createElement('h2', { className: 'mdc-dialog__header__title' }, children)
    );
};