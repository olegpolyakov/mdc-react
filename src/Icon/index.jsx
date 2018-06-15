import React from 'react';
import classnames from 'classnames';

export default function Icon({ element = 'i', className, ...props }) {
    return (
        React.createElement(element, {
            className: classnames('material-icons', className),
            ...props
        })
    );
};