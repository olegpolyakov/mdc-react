import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function IconButton({
    on = false,
    icon,
    onIcon,
    offIcon,
    onLabel,
    offLabel,
    
    element = 'button',
    component = element,
    className,
    children = icon,
    ...props
}) {
    return React.isValidElement(children) ?
        React.cloneElement(children, {
            element,
            className: 'mdc-icon-button',
            ...props
        })
        :
        React.createElement(component, {
            className: classnames('mdc-icon-button', {
                'mdc-icon-button--on': on
            }, className),
            ...props
        },
            React.cloneElement(onIcon, {
                className: 'mdc-icon-button__icon mdc-icon-button__icon--on',
                title: offLabel
            }),
            React.cloneElement(offIcon, {
                className: 'mdc-icon-button__icon',
                title: onLabel
            })
        );
}