import React from 'react';
import classnames from 'classnames';

export default function DataTableHeader({ className, ...props }) {
    const classNames = classnames('mdc-data-table__header', className);

    return (
        <thead className={classNames} {...props} />
    );
}

DataTableHeader.displayName = 'MDCDataTableHeader';