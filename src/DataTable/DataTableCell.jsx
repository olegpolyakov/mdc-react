import React from 'react';
import classnames from 'classnames';

export default function DataTableCell({ header, element = header ? 'th' : 'td', numeric, actions, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-data-table__cell', {
            'mdc-data-table__cell--numeric': numeric,
            'mdc-data-table__cell-actions': actions
        }),
        ...props
    }, children);
};