import React from 'react';

export default function DataTableRow({ children }) {
    return (
        <tr className="mdc-data-table__row">
            {children}
        </tr>
    );
};