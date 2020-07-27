import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DataTableContent);

function DataTableContent({ className, ...props }, ref) {
    const classNames = classnames('mdc-data-table__content', className);

    return (
        <tbody ref={ref} className={classNames} {...props} />
    );
}

DataTableContent.displayName = 'MDCDataTableContent';