import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(SideSheetAppContent);

function SideSheetAppContent({ element: Element = 'div', className, ...props }, ref) {
    const classNames = classnames('mdc-side-sheet-app-content', className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

SideSheetAppContent.displayName = 'MDCSideSheetAppContent';