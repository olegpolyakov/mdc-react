import React from 'react';
import classnames from 'classnames';

export default function TopAppBarTitle({ element: Element = 'span', className, ...props }) {
    const classNames = classnames('mdc-top-app-bar__title', className);

    return (
        <Element className={classNames} {...props} />
    );
}

TopAppBarTitle.displayName = 'MDCTopAppBarTitle';