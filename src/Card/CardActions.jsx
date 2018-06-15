import React from 'react';
import classnames from 'classnames';

export default function CardActions({ element = 'section', className, fullBleed, ...props }) {
    return React.createElement(element,
        {
            className: classnames('mdc-card__actions', className, {
                'mdc-card__actions--full-blee': fullBleed
            }),
            ...props
        }
    );
}