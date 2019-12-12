import React from 'react';
import classnames from 'classnames';

export default function DataTableContent({ className, ...props }) {
    const classNames = classnames('mdc-data-table__content', className);

    return (
        <tbody className={classNames} {...props} />
    );
}

DataTableContent.displayName = 'MDCDataTableContent';