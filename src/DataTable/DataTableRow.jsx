import React from 'react';

export default function DataTableRow({ children, ...props }) {
    return React.createElement('tr', {
        className: 'mdc-data-table__row',
        ...props
    }, children);
}