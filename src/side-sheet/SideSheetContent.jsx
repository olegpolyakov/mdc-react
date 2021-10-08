import { forwardRef } from 'react';

import { cssClasses } from './constants';

const SideSheetContent = forwardRef(({ element: Element = 'div', ...props }, ref) => {
    return (
        <Element ref={ref} className={cssClasses.CONTENT} {...props} />
    );
});

SideSheetContent.displayName = 'MDCSideSheetContent';

export default SideSheetContent;