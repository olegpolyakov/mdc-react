import React from 'react';
import classnames from 'classnames';

export default function ListItemGraphic({
    element = 'i',
    component = element,
    icon,
    className,
    children,
    ...props
}) {
    if (typeof icon === 'string') {
        return React.createElement(component, {
            className: classnames('mdc-list-item__graphic', {
                'material-icons': icon && typeof icon === 'string',
            }, className),
            ...props
        }, icon);
    } else {
        return React.cloneElement(icon || children, {
            className: 'mdc-list-item__graphic'
        });
    }
}