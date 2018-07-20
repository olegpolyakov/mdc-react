import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Avatar({
    element = 'div',
    component = element,
    src,
    size,
    className,
    children,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-avatar', {
            [`mdc-avatar--${small}`]: size
        }, className),
        ...props
    },
        src ?
            React.createElement('img', {
                className: 'mdc-avatar__image',
                src
            })
            :
            React.createElement('span', {
                className: 'mdc-avatar__text'
            }, children)
    );
};