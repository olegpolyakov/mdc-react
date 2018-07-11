import React from 'react';
import classnames from 'classnames';

export default function CardSection({ element = 'section', component = element, primary, secondary, className, children, ...props }) {
    return React.createElement(component,
        {
            className: classnames('mdc-card__section', {
                'mdc-card__section--primary': primary,
                'mdc-card__section--secondary': secondary,
            }, className),
            ...props
        },
        children
    );
}