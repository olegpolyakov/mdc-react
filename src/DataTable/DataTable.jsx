import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function DataTable({
    stickyHeader = false,

    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-data-table', {
        'mdc-data-table--sticky-header': stickyHeader
    }, className);

    return (
        <div className={classNames} {...props}>
            <div className="mdc-data-table__table-container">
                <table className="mdc-data-table__table">
                    {children}
                </table>
            </div>
        </div>
    );
}

DataTable.displayName = 'MDCDataTable';

DataTable.propTypes = {
    stickyHeader: PropTypes.bool
};