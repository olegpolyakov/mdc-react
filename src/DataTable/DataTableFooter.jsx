import React from 'react';

export default function DataTableFooter({ children, ...props }) {
    return React.createElement('tfoot', {
        className: 'mdc-data-table__footer',
        ...props
    }, children);
}