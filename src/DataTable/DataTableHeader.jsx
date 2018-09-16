import React from 'react';
import classnames from 'classnames';

export default function DataTableHeader({ sort, children, ...props }) {
    return React.createElement('thead', {
        className: classnames('mdc-data-table__header', {
            'mdc-data-table__header--sorted-ascending': sort === 'asc',
            'mdc-data-table__header--sorted-descending': sort === 'desc',
        }),
        ...props
    }, children);
}