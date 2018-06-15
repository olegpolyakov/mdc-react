import React from 'react';
import classnames from 'classnames';

export default function CardMedia({ element = 'section', image, className, children, ...props }) {
    
    return React.createElement(element,
        {
            className: classnames('mdc-card__media', 'mdc-card__media--16-9', className),
            style: image && {
                backgroundImage: `url(${image})`
            },
            ...props
        },
        children
    );
}