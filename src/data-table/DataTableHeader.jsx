import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const DataTableHeader = forwardRef(({ className, ...props }, ref) => {
    const classNames = classnames(cssClasses.HEADER, className);

    return (
        <thead ref={ref} className={classNames} {...props} />
    );
});

DataTableHeader.displayName = 'MDCDataTableHeader';

export default DataTableHeader;