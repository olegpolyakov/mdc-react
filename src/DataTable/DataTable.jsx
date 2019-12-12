import React from 'react';
import classnames from 'classnames';

export default function DataTable({ className, children, ...props }) {
    const classNames = classnames('mdc-data-table', className);

    return (
        <div className={classNames} {...props}>
            <table className="mdc-data-table__table">
                {children}
            </table>
        </div>
    );
}

DataTable.displayName = 'MDCDataTable';