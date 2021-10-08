import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const SideSheetAppContent = forwardRef(({ element: Element = 'div', className, ...props }, ref) => {
    const classNames = classnames(cssClasses.APP_CONTENT, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

SideSheetAppContent.displayName = 'MDCSideSheetAppContent';

export default SideSheetAppContent;