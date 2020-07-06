import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function DataTableRow({
    selected = false,

    className,
    ...props
}) {
    const classNames = classnames('mdc-data-table__row', {
        'mdc-data-table__row--selected': selected
    }, className);

    return (
        <tr className={classNames} {...props} />
    );
}

DataTableRow.displayName = 'MDCDataTableRow';

DataTableRow.propTypes = {
    selected: PropTypes.bool
};