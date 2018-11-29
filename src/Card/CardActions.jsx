import React from 'react';
import classnames from 'classnames';

export default function CardActions({
    fullBleed = false,

    element = 'div',
    className,
    ...props
}) {
    const Element = element;
    const classNames = classnames('mdc-card__actions', className, {
        'mdc-card__actions--full-bleed': fullBleed
    });

    return (
        <Element className={classNames} {...props} />
    );
}