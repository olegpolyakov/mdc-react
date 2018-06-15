import React from 'react';

export default function TopAppBarRow({ element = 'div', children, ...props }) {
    return React.createElement(element, {
        className: 'mdc-top-app-bar__row',
        ...props
    }, children);
};