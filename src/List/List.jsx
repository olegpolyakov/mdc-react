import React from 'react';
import classnames from 'classnames';

List.displayName = 'MDCList';

export default function List({
    inset = false,
    dense = false,
    twoLine = false,
    avatarList = false,
    nonInteractive = false,

    element: Element = 'ul',
    className,
    ...props
}) {
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