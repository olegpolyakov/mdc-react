import React from 'react';
import classnames from 'classnames';

export default function ListItemGraphic({
    element = 'span',
    component = element,
    icon,
    className,
    children,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-list-item__meta', {
            'material-icons': icon && typeof icon === 'string',
        }, className),
        ...props
    }, icon, children)
}