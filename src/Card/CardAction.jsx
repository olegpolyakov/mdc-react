import React from 'react';
import classnames from 'classnames';

export default function CardAction({ component, children, button, icon, ...props }) {
    return (
        React.cloneElement(component || React.Children.only(children), {
            className: classnames('mdc-card__action', {
                'mdc-card__action--button': button,
                'mdc-card__action--icon': icon
            }),
            ...props
        })
    );
};