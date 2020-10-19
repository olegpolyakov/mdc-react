import React from 'react';

export default React.forwardRef(DrawerContent);

function DrawerContent({ element: Element = 'div', ...props }, ref) {
    return (
        <Element ref={ref} className="mdc-drawer__content" {...props} />
    );
}

DrawerContent.displayName = 'MDCDrawerContent';