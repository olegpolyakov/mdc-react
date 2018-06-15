import React from 'react';

export default function ListGroupSubheader({ element = 'h3', title, children }) {
    return React.createElement('h3', {
        className: 'mdc-list-group__subheader'
    }, title || children);
}