import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function DataTableCell({
    header = false,
    numeric = false,
    checkbox = false,

    element: Element = header ? 'th' : 'td',
    role = header ? 'columnheader' : undefined,
    scope = header ? 'col' : undefined,
    className,
    ...props
}) {
    const classNames = classnames({
        'mdc-data-table__cell': !header,
        'mdc-data-table__cell--numeric': !header && numeric,
        'mdc-data-table__cell--checkbox': !header && checkbox,
        'mdc-data-table__header-cell': header,
        'mdc-data-table__header-cell--numeric': header && numeric,
        'mdc-data-table__header-cell--checkbox': header && checkbox
    }, className);

    return (
        <Element className={classNames} role={role} scope={scope} {...props} />
    );
}

DataTableCell.displayName = 'MDCDataTableCell';

DataTableCell.propTypes = {
    numeric: PropTypes.bool,
    checkbox: PropTypes.bool
};