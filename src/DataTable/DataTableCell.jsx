import React from 'react';
import classnames from 'classnames';

DataTableCell.displayName = 'MDCDataTableCell';

export default function DataTableCell({
    numeric = false,
    actions = false,

    element: Element = 'td',
    className,
    ...props
}) {
    const classNames = classnames('mdc-data-table__cell', {
        'mdc-data-table__cell--numeric': numeric,
        'mdc-data-table__cell-actions': actions
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}