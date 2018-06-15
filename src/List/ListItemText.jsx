import React from 'react';

export default function ListItemText({
    element = 'span',
    component = element,
    primary,
    secondary,
    children,
    ...props
}) {
    return React.createElement(component, {
        className: 'mdc-list-item__text',
    },
        primary && React.createElement('span', { className: 'mdc-list-item__primary-text' }, primary),
        secondary && React.createElement('span', { className: 'mdc-list-item__secondary-text' }, secondary),
        children
    );
}