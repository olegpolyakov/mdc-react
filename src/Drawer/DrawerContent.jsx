import React from 'react';

export default function DrawerContent({ element = 'div', children, ...props }) {
    return React.createElement(element, {
            className: 'mdc-temporary-drawer__content',
            ...props
        },
        children
    );
};