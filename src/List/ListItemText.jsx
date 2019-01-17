import React from 'react';

ListItemText.displayName = 'MDCListItemText';

export default function ListItemText({
    primary,
    secondary,

    children,
    ...props
}) {
    return (
        <span className="mdc-list-item__text" {...props}>
            {primary && <span className="mdc-list-item__primary-text">{primary}</span>}
            {secondary && <span className="mdc-list-item__secondary-text">{secondary}</span>}
            {children}
        </span>
    );
}