import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const DataTableHeaderRow = forwardRef(({ className, ...props }, ref) => {
    const classNames = classnames(cssClasses.HEADER_ROW, className);

    return (
        <tr ref={ref} className={classNames} {...props} />
    );
});

DataTableHeaderRow.displayName = 'MDCDataTableHeaderRow';

export default DataTableHeaderRow;