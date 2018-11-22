import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Badge({
    value,
    overlap = false,
    noBackground = false,

    element = 'span',
    className,
    ...props
}) {
    const Element = element;
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