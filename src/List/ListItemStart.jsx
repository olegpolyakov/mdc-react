import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(ListItemStart);

function ListItemStart({
    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item__start', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}
        </Element>
    );
}

ListItemStart.displayName = 'MDCListItemStart';