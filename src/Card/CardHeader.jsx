import React from 'react';
import classnames from 'classnames';

export default function CardHeader({ element = 'header', graphic, title, subtitle, action, large, className, ...props }) {
    const titleClassNames = classnames('mdc-card__header__title', {
        'mdc-card__header__title--large': large
    });

    return React.createElement(element,
        {
            className: classnames('mdc-card__header', className),
            ...props
        },
        
        graphic && React.cloneElement(graphic, {
            className: 'mdc-card__header__graphic'
        }),

        <div className="mdc-card__header__text">
            <h2 className={titleClassNames}>{title}</h2>
            {subtitle && <h3 className="mdc-card__header__subtitle">{subtitle}</h3>}
        </div>,

        action && React.cloneElement(action, {
            className: 'mdc-card__header__action'
        })
    );
}