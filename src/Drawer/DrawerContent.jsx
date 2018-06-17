import React from 'react';

export default function DrawerContent({ element = 'div', children, ...props }) {
    return React.createElement(element, {
            className: 'mdc-drawer__content',
            ...props
        },
        children
    );
};