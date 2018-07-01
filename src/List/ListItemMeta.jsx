import React from 'react';
import classnames from 'classnames';

export default function ListItemMeta({
    element = 'span',
    component = element,
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
        return React.createElement(component, {
            className: classNames,
            ...props
        }, children);
    }
}