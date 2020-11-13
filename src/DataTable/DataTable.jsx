import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DataTableProgressIndicator from './DataTableProgressIndicator';
import DataTablePagination from './DataTablePagination';

export default React.forwardRef(DataTable);

function DataTable({
    stickyHeader = false,
    inProgress = false,
    pagination,

    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-data-table', {
        'mdc-data-table--sticky-header': stickyHeader,
        'mdc-data-table--in-progress': inProgress
    }, className);

    return (
        <div ref={ref} className={classNames} {...props}>
            <div className="mdc-data-table__table-container">
                <table className="mdc-data-table__table">
                    {children}
                </table>
            </div>

            {inProgress &&
                <DataTableProgressIndicator />
            }

            {pagination &&
                (React.isValidElement(pagination) ?
                    pagination
                    :
                    <DataTablePagination {...pagination} />
                )
            }
        </div>
    );
}

DataTable.displayName = 'MDCDataTable';

DataTable.propTypes = {
    stickyHeader: PropTypes.bool,
    inProgress: PropTypes.bool
};