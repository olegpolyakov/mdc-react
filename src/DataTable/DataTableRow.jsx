import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(DataTableRow);

function DataTableRow({
    selected = false,

    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-data-table__row', {
        'mdc-data-table__row--selected': selected
    }, className);

    return (
        <tr ref={ref} className={classNames} {...props} />
    );
}

DataTableRow.displayName = 'MDCDataTableRow';

DataTableRow.propTypes = {
    selected: PropTypes.bool
};