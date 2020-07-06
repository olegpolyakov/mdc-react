import React from 'react';
import classnames from 'classnames';

export default function TopAppBarActionItem({
    element: Element = 'span',
    className,
    ...props
}) {
    const classNames = classnames('mdc-top-app-bar__action-item', className);

    return (
        <Element className={classNames} {...props} />
    );
}

TopAppBarActionItem.displayName = 'MDCTopAppBarActionItem';