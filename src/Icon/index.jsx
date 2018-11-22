import React from 'react';
import classnames from 'classnames';

export default function Icon({
    size,
    dark = false,
    light = false,
    inactive = false,

    element = 'i',
    component = element,
    className,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-icon', 'material-icons', {
            [`md-${size}`]: size,
            'md-dark': dark,
            'md-light': light,
            'md-inactive': inactive
        }, className),
        ...props
    });
}