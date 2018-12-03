import React from 'react';
import classnames from 'classnames';

CardSection.displayName = 'MDCCardSection';

export default function CardSection({
    primary = false,
    secondary = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-card__section', {
        'mdc-card__section--primary': primary,
        'mdc-card__section--secondary': secondary,
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}