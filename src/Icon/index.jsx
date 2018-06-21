import React from 'react';
import classnames from 'classnames';

export default function Icon({
    element = 'i',
    component = element,
    size = 18,
    dark,
    light,
    inactive,
    className,
    ...props
}) {
    return (
        React.createElement(element, {
            className: classnames('material-icons', {
                [`md-${size}`]: size,
                'md-dark': dark,
                'md-light': light,
                'md-inactive': inactive
            }, className),
            ...props
        })
    );
};