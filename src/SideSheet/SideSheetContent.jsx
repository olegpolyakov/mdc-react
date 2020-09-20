import React from 'react';

export default React.forwardRef(SideSheetContent);

function SideSheetContent({ children }, ref) {
    return (
        <section ref={ref} className="mdc-side-sheet__content">
            {children}
        </section>
    );
}

SideSheetContent.displayName = 'MDCSideSheetContent';