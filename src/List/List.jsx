import React from 'react';
import classnames from 'classnames';

export default function List({
    inset = false,
    dense = false,
    twoLine = false,
    avatarList = false,
    nonInteractive = false,

    element = 'ul',
    className,
    ...props
}) {
    const Element = element;
    const classNames = classnames('mdc-list', {
        'mdc-list--inset': inset,
        'mdc-list--dense': dense,
        'mdc-list--two-line': twoLine,
        'mdc-list--avatar-list': avatarList,
        'mdc-list--non-interactive': nonInteractive
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}