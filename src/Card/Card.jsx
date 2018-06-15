import React from 'react';
import classnames from 'classnames';

export default function Card({ element = 'div', outlined, className, children, ...props }) {
    return React.createElement(element,
        {
            className: classnames('mdc-card', className, {
                'mdc-card--outlined': outlined
            }),
            ...props
        },
        children
    );
}