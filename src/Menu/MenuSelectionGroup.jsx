import React from 'react';

export default function MenuSelectionGroup({
    element: Element = 'ul',
    ...props
}) {
    return (
        <Element className="mdc-menu__selection-group" {...props} />
    );
}

MenuSelectionGroup.displayName = 'MDCMenuSelectionGroup';