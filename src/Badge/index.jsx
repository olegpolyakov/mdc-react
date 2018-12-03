import React from 'react';
import classnames from 'classnames';

import './index.scss';

Badge.displayName = 'MDCBadge';

export default function Badge({
    value,
    overlap = false,
    noBackground = false,

    element: Element = 'span',
    className,
    ...props
}) {
    const classNames = classnames('mdc-badge', {
        'mdc-badge--overlap': overlap,
        'mdc-badge--no-background': noBackground
    }, className);

    return (
        <Element
            className={classNames}
            data-badge={value}
            {...props}
        />
    );
};