import React from 'react';
import classnames from 'classnames';

export default function DataTableCell({ element = 'td', numeric, actions, className, ...props }) {
    const Element = element;
    const classNames = classnames('mdc-data-table__cell', {
        'mdc-data-table__cell--numeric': numeric,
        'mdc-data-table__cell-actions': actions
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}