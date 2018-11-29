import React from 'react';
import classnames from 'classnames';

export default function ListDivider({
    inset = false,
    padded = false,

    element = 'li',
    className,
    ...props
}) {
    const Element = element;
    const classNames = classnames('mdc-list-divider', {
        'mdc-list-divider--inset': inset,
        'mdc-list-divider--padded': padded,
    }, className);

    return (
        <Element
            className={classNames}
            role={element === 'li' ? 'separator' : undefined}
            {...props}
        />
    );
};