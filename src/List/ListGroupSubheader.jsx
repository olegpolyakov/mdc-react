import React from 'react';
import classnames from 'classnames';

export default function ListGroupSubheader({
    title,

    element = 'h3',
    className,
    children = title,
    ...props
}) {
    const Element = element;
    const classNames = classnames('mdc-list-group__subheader', className);

    return (
        <Element className={classNames} {...props}>{children}</Element>
    );
}