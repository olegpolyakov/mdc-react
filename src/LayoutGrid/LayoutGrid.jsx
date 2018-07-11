import React from 'react';
import classnames from 'classnames';

export default function LayoutGrid({ element = 'div', component = element, align, fixed, span, desktop, tablet, mobile, children, ...props }) {
    return React.createElement(component, {
        className: classnames('mdc-layout-grid', {
            [`mdc-layout-grid--align-${align}`]: align,
            'mdc-layout-grid--fixed-column-width': fixed
        }),
        ...props,
    },
        React.createElement('div', {
            className: 'mdc-layout-grid__inner'
        }, children)
    );
}