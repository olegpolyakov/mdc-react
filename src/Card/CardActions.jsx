import React from 'react';
import classnames from 'classnames';

CardActions.displayName = 'MDCCardActions';

export default function CardActions({
    fullBleed = false,

    element: Element = 'div',
    className,
    ...props
}) {
    const classNames = classnames('mdc-card__actions', {
        'mdc-card__actions--full-bleed': fullBleed
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}