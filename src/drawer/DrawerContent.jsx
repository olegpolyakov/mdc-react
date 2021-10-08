import { forwardRef } from 'react';

import { cssClasses } from './constants';

const DrawerContent = forwardRef(({
    element: Element = 'div',
    ...props
}, ref) => {
    return (
        <Element ref={ref} className={cssClasses.CONTENT} {...props} />
    );
});

DrawerContent.displayName = 'MDCDrawerContent';

export default DrawerContent;