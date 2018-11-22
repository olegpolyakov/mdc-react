import React from 'react';
import classnames from 'classnames';

export default function CardHeader({
    graphic,
    title,
    subtitle,
    action,
    large,

    element = 'header',
    component = element,
    className,
    children,
    ...props
}) {
    const Element = component;
    const rootClassNames = classnames('mdc-card__header', className);
    const titleClassNames = classnames('mdc-card__header__title', {
        'mdc-card__header__title--large': large
    });

    return (
        <Element className={rootClassNames} {...props}>
            {graphic && React.cloneElement(graphic, { className: 'mdc-card__header__graphic' })}

            <div className="mdc-card__header__text">
                <h2 className={titleClassNames}>{title}</h2>
                {subtitle && <h3 className="mdc-card__header__subtitle">{subtitle}</h3>}
            </div>

            {action && React.cloneElement(action, { className: classnames(action.props.className, 'mdc-card__header__action') })}
        </Element>
    );
}