import React from 'react';
import classnames from 'classnames';

export default function CardMedia({ element = 'section', image, square, wide, className, children, ...props }) {
    return React.createElement(element,
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
        children && React.createElement('div', { className: 'mdc-card__media-content' }, children)
    );
}