import React from 'react';

export default function DataTableFooter({ children }) {
    return (
        <tfoot className="mdc-table__footer">
            {children}
        </tfoot>
    );
};