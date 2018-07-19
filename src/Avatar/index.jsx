import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Avatar({ element = 'div', src, small, large, className, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-avatar', {
            'mdc-avatar--small': small,
            'mdc-avatar--large': large
        }, className),
        ...props
    },
        src ?
            React.createElement('img', {
                className: 'mdc-avatar__image',
                src
            })
            :
            (React.isValidElement(children) ?
                React.cloneElement(children, {
                    className: 'mdc-avatar__icon'
                })
                :
                React.createElement('span', {
                    className: 'mdc-avatar__text'
                }, children)
            )
    );
};