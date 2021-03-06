import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(TopAppBarActionItem);

function TopAppBarActionItem({
    element = 'span',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-top-app-bar__action-item', className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

TopAppBarActionItem.displayName = 'MDCTopAppBarActionItem';