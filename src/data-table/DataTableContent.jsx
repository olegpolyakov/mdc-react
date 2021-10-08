import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const DataTableContent = forwardRef(({ className, ...props }, ref) => {
    const classNames = classnames(cssClasses.CONTENT, className);

    return (
        <tbody ref={ref} className={classNames} {...props} />
    );
});

DataTableContent.displayName = 'MDCDataTableContent';

export default DataTableContent;