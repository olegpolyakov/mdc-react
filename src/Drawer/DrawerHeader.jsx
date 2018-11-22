import React from 'react';

export default function DrawerHeader({ element = 'header', title, subtitle, children }) {
    return React.createElement(element, {
            className: 'mdc-drawer__header'
        },
            title && React.createElement('h3', { className: 'mdc-drawer__title' }, title),
            subtitle && React.createElement('h6', { className: 'mdc-drawer__subtitle' }, subtitle),
            children
    );
};