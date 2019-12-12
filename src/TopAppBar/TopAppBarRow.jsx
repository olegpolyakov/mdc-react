import React from 'react';

export default function TopAppBarRow({ element: Element = 'div', ...props }) {
    return (
        <Element className="mdc-top-app-bar__row" {...props} />
    );
}

TopAppBarRow.displayName = 'MDCTopAppBarRow';