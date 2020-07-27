import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(DataTableFooter);

function DataTableFooter(props, ref) {
    const classNames = classnames('mdc-data-table__footer', className);

    return (
        <tfoot ref={ref} className={classNames} {...props} />
    );
}

DataTableFooter.displayName = 'MDCDataTableFooter';