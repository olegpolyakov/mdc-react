import React from 'react';

export default React.forwardRef(MenuSelectionGroup);

function MenuSelectionGroup({
    element: Element = 'ul',
    ...props
}, ref) {
    return (
        <li ref={ref}>
            <Element className="mdc-menu__selection-group" {...props} />
        </li>
    );
}

MenuSelectionGroup.displayName = 'MDCMenuSelectionGroup';