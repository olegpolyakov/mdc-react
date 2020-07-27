import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(TopAppBarRow);

function TopAppBarRow({
    element: Element = 'div',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-top-app-bar__row', className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

TopAppBarRow.displayName = 'MDCTopAppBarRow';