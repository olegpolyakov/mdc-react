import React from 'react';
import classnames from 'classnames';

export default function DataTableFoot(props) {
    const classNames = classnames('mdc-data-table__foot', className);

    return (
        <tfoot className={classNames} {...props} />
    );
}

DataTableFoot.displayName = 'MDCDataTableFoot';