import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinearProgress from '../LinearProgress/LinearProgress';

export default React.forwardRef(DataTable);

function DataTable({
    stickyHeader = false,
    inProgress = false,

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
                <div className="mdc-data-table__progress-indicator">
                    <div className="mdc-data-table__scrim" />

                    <LinearProgress className="mdc-data-table__linear-progress" indeterminate />
                </div>
            }
        </div>
    );
}

DataTable.displayName = 'MDCDataTable';

DataTable.propTypes = {
    stickyHeader: PropTypes.bool,
    inProgress: PropTypes.bool
};