import React from 'react';
import classnames from 'classnames';

export default function ListItem({
    selected = false,
    activated = false,

    element = 'li',
    component = element,
    className,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-list-item', {
        'mdc-list-item--selected': selected,
        'mdc-list-item--activated': activated
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}