import React from 'react';

export default React.forwardRef(SideSheetContent);

function SideSheetContent({ element: Element = 'div', ...props }, ref) {
    return (
        <Element ref={ref} className="mdc-side-sheet__content" {...props} />
    );
}

SideSheetContent.displayName = 'MDCSideSheetContent';