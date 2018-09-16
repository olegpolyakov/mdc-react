import React from 'react';

export default function DataTableBody({ children, ...props }) {
    return React.createElement('tbody', {
        className: 'mdc-data-table__body',
        ...props
    }, children);
}