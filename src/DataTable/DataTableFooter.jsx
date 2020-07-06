import React from 'react';
import classnames from 'classnames';

export default function DataTableFooter(props) {
    const classNames = classnames('mdc-data-table__footer', className);

    return (
        <tfoot className={classNames} {...props} />
    );
}

DataTableFooter.displayName = 'MDCDataTableFooter';