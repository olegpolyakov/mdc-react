import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(TopAppBarTitle);

function TopAppBarTitle({
    element: Element = 'span',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-top-app-bar__title', className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

TopAppBarTitle.displayName = 'MDCTopAppBarTitle';