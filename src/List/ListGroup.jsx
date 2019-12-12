import React from 'react';
import classnames from 'classnames';

export default function ListGroup({
    element: Element = 'div',
    className,
    ...props
}) {
    const classNames = classnames('mdc-list-group', className);

    return (
        <Element className={classNames} {...props} />
    );
}

ListGroup.displayName = 'MDCListGroup';