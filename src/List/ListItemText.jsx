import React from 'react';
import classnames from 'classnames';

export default function ListItemText({
    primary,
    secondary,

    element = 'span',
    component = element,
    children,
    ...props
}) {
    return React.createElement(component, {
        className: classnames({
            'mdc-list-item__text': primary && secondary
        }),
        ...props
    },
        primary && React.createElement('span', { className: 'mdc-list-item__primary-text' }, primary),
        secondary && React.createElement('span', { className: 'mdc-list-item__secondary-text' }, secondary),
        children
    );
}