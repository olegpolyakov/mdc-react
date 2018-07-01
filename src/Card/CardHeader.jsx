import React from 'react';
import classnames from 'classnames';

export default function CardHeader({ element = 'header', avatar, title, subtitle, large, className, ...props }) {
    const titleClassNames = classnames('mdc-card__header__title', {
        'mdc-card__header__title--large': large
    });

    return React.createElement(element,
        {
            className: classnames('mdc-card__header', className),
            ...props
        },
        
        avatar && React.cloneElement(avatar, {
            className: 'mdc-card__header__avatar'
        }),

        <div className="mdc-card__header__inner">
            <h2 className={titleClassNames}>{title}</h2>
            {subtitle && <h3 className="mdc-card__header__subtitle">{subtitle}</h3>}
        </div>
    );
}