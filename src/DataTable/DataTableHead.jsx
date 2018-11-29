import React from 'react';
import classnames from 'classnames';

export default function DataTableHead({ sort, className, ...props }) {
    const classNames = classnames('mdc-data-table__head', {
        'mdc-data-table__head--sorted-ascending': sort === 'asc',
        'mdc-data-table__head--sorted-descending': sort === 'desc',
    }, className);

    return (
        <thead className={classNames} {...props} />
    );
}