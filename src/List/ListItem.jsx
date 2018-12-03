import React from 'react';
import classnames from 'classnames';

ListItem.displayName = 'MDCListItem';

export default function ListItem({
    selected = false,
    activated = false,

    element = 'li',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-list-item', {
        'mdc-list-item--selected': selected,
        'mdc-list-item--activated': activated
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}