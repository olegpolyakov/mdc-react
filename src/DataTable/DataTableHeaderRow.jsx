import React from 'react';
import classnames from 'classnames';

export default function DataTableHeaderRow({ className, ...props }) {
    const classNames = classnames('mdc-data-table__header-row', className);

    return (
        <tr className={classNames} {...props} />
    );
}

DataTableHeaderRow.displayName = 'MDCDataTableHeaderRow';