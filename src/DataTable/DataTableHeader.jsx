import React from 'react';
import classnames from 'classnames';

export default function DataTableHeader({ sort, children, ...props }) {
    return (
        <thead
            className={classnames('mdc-data-table__header', {
                'mdl-data-table__header--sorted-ascending': sort === 'asc',
                'mdl-data-table__header--sorted-descending': sort === 'desc',
            })}
            {...props}>
            {children}
        </thead>
    );
};