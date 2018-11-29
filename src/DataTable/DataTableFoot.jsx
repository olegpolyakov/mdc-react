import React from 'react';

export default function DataTableFoot({ children, ...props }) {
    return (
        <tfoot className="mdc-data-table__foot" {...props} />
    );
}