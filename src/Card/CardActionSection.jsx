import React from 'react';
import classnames from 'classnames';

export default function CardActionSection({
    buttons,
    icons,

    className,
    ...props
}) {
    const classNames = classnames({
        'mdc-card__action-buttons': buttons,
        'mdc-card__action-icons': icons
    }, className);

    return (
        <div className={classNames} {...props} />
    );
}