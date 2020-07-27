import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DataTableHeaderRow);

function DataTableHeaderRow({ className, ...props }, ref) {
    const classNames = classnames('mdc-data-table__header-row', className);

    return (
        <tr ref={ref} className={classNames} {...props} />
    );
}

DataTableHeaderRow.displayName = 'MDCDataTableHeaderRow';