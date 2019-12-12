import React from 'react';
import classnames from 'classnames';

export default function ListItemMeta({
    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-list-item__meta', className);

    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            className: classNames,
            ...props
        });
    } else {
        return (
            <Element className={classNames} {...props}>
                {children}
            </Element>
        );
    }
}

ListItemMeta.displayName = 'MDCListItemMeta';