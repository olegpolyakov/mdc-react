import React from 'react';
import classnames from 'classnames';

export default function CardMedia({ element = 'section', component = element, image, content, square, wide, className, children, ...props }) {
    return React.createElement(component,
        {
            className: classnames('mdc-card__media', {
                'mdc-card__media--square': square,
                'mdc-card__media--16-9': wide,
            }, className),
            style: image && {
                backgroundImage: `url(${image})`
            },
            ...props
        },
        content && React.createElement('div', { className: 'mdc-card__media-content' }, content),
        children
    );
}