import React from 'react';

ListItemText.displayName = 'MDCListItemText';

export default function ListItemText({
    primary = false,
    secondary = false,

    children = primary,
    ...props
}) {
    if (primary && secondary) {
        return (
            <div className="mdc-list-item__text" {...props}>
                <span className="mdc-list-item__primary-text">{primary}</span>
                <span className="mdc-list-item__secondary-text">{secondary}</span>
            </div>
        );
    } else {
        return children;
    }
}