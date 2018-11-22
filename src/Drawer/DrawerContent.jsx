import React from 'react';

export default function DrawerContent({ element = 'div', children }) {
    return React.createElement(element, {
            className: 'mdc-drawer__content'
        },
        children
    );
};