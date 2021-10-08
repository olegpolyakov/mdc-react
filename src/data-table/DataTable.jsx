import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import DataTableProgressIndicator from './DataTableProgressIndicator';
import DataTablePagination from './DataTablePagination';
import { cssClasses } from './constants';

const DataTable = forwardRef(({
    stickyHeader = false,
    inProgress = false,
    pagination,

    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.STICKY_HEADER]: stickyHeader,
        [cssClasses.IN_PROGRESS]: inProgress
    }, className);

    return (
        <div ref={ref} className={classNames} {...props}>
            <div className={cssClasses.TABLE_CONTAINER}>
                <table className={cssClasses.TABLE}>
                    {children}
                </table>
            </div>

            {inProgress &&
                <DataTableProgressIndicator />
            }

            {pagination &&
                <DataTablePagination {...pagination} />
            }
        </div>
    );
});

DataTable.displayName = 'MDCDataTable';

DataTable.propTypes = {
    stickyHeader: PropTypes.bool,
    inProgress: PropTypes.bool
};

export default DataTable;