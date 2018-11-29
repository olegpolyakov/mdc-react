import React from 'react';
import classnames from 'classnames';

export default function ListGroup({
    element = 'div',
    className,
    ...props
}) {
    const classNames = classnames('mdc-list-group', className);

    return (
        <div className={classNames} {...props} />
    );
}