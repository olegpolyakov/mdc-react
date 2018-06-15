import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Badge({ element = 'span', value, overlap, noBackground, className, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-badge', {
            'mdc-badge--overlap': overlap,
            'mdc-badge--no-background': noBackground
        }, className),
        'data-badge': value,
        ...props
    }, children);
};