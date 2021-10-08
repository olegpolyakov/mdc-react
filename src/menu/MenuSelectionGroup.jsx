import { forwardRef } from 'react';

const MenuSelectionGroup = forwardRef(({
    element: Element = 'ul',
    ...props
}, ref) => {
    return (
        <li ref={ref}>
            <Element className="mdc-menu__selection-group" {...props} />
        </li>
    );
});

MenuSelectionGroup.displayName = 'MDCMenuSelectionGroup';

export default MenuSelectionGroup;