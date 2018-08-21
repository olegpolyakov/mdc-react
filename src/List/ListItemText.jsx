import React from 'react';

export default function ListItemText({
    primary,
    secondary,

    element = 'span',
    component = element,
    children = primary,
    ...props
}) {
    if (primary && secondary) {
        return React.createElement(component, {
            className: 'mdc-list-item__text',
            ...props
        },
            React.createElement('span', { className: 'mdc-list-item__primary-text' }, primary),
            React.createElement('span', { className: 'mdc-list-item__secondary-text' }, secondary)
        );
    } else if (children) {
        return children;
    } else {
        return null;
    }
}