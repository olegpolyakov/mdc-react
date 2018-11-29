import React from 'react';
import classnames from 'classnames';

export default function DataTable({ selectable = false, className, ...props }) {
    const classNames = classnames('mdc-data-table', {
        'mdc-data-table--selectable': selectable
    }, className);

    return (
        <table className={classNames} {...props} />
    );
}