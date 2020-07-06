import React from 'react';
import classnames from 'classnames';

export default function TopAppBarRow({ element: Element = 'div', className, ...props }) {
    const classNames = classnames('mdc-top-app-bar__row', className);

    return (
        <Element className={classNames} {...props} />
    );
}

TopAppBarRow.displayName = 'MDCTopAppBarRow';