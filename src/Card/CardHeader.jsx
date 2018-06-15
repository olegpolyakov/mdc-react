import React from 'react';
import classnames from 'classnames';

export default function CardHeader({ element = 'header', title, subtitle, large, className, ...props }) {
    const titleClassNames = classnames('mdc-card__title', {
        'mdc-card__title--large': large
    });

    return React.createElement(
        element,

        {
            className: classnames('mdc-card__header', className),
            ...props
        },
        
        <div>
            <h2 className={titleClassNames}>{title}</h2>
            {subtitle && <h3 className="mdc-card__subtitle">{subtitle}</h3>}
        </div>
    );
}