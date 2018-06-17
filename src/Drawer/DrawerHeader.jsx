import React from 'react';

export default function DrawerHeader({ element = 'header', children, ...props }) {
    return React.createElement(element, {
            className: 'mdc-drawer__header',
            ...props
        },
        React.createElement('div', {
            className: 'mdc-drawer__header-content'
        }, children)
    );
};