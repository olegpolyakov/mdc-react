import React from 'react';

export default function MenuSelectionGroup({
    element: Element = 'ul',
    ...props
}) {
    return (
        <li>
            <Element className="mdc-menu__selection-group" {...props} />
        </li>
    );
}

MenuSelectionGroup.displayName = 'MDCMenuSelectionGroup';