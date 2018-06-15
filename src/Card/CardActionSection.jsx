import React from 'react';
import classnames from 'classnames';

export default function CardActionSection({ element = 'section', buttons, icons, className, ...props }) {
    return React.createElement(element,
        {
            className: classnames({
                'mdc-card__action-buttons': buttons,
                'mdc-card__action-icons': icons
            }, className),
            ...props
        }
    );
}