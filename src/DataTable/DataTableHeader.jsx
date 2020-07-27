import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DataTableHeader);

function DataTableHeader({ className, ...props }, ref) {
    const classNames = classnames('mdc-data-table__header', className);

    return (
        <thead ref={ref} className={classNames} {...props} />
    );
}

DataTableHeader.displayName = 'MDCDataTableHeader';