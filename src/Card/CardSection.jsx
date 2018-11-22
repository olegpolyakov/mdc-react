import React from 'react';
import classnames from 'classnames';

export default function CardSection({
    primary = false,
    secondary = false,

    element = 'section',
    component = element,
    className,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-card__section', {
        'mdc-card__section--primary': primary,
        'mdc-card__section--secondary': secondary,
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}