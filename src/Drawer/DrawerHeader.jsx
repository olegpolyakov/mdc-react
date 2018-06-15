import React from 'react';

export default function DrawerHeader({ element = 'header', children, ...props }) {
    return React.createElement(element, {
            className: 'mdc-temporary-drawer__header',
            ...props
        },
        React.createElement('div', {
            className: 'mdc-temporary-drawer__header-content'
        }, children)
    );
};