import React from 'react';

export default function DataTableBody({ children }) {
    return (
        <tbody className="mdc-table__body">
            {children}
        </tbody>
    );
};