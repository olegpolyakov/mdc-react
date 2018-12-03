import React from 'react';
import classnames from 'classnames';

CardActionSection.displayName = 'MDCCardActionSection';

export default function CardActionSection({
    buttons,
    icons,

    element = 'div',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames({
        'mdc-card__action-buttons': buttons,
        'mdc-card__action-icons': icons
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}