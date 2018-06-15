import React from 'react';
import classnames from 'classnames';

export default function TopAppBarSection({ element = 'section', align, className, children, ...props }) {
    return React.createElement(element,
        {
            className: classnames('mdc-top-app-bar__section', {
                [`mdc-top-app-bar__section--align-${align}`]: align
            }, className),
            ...props
        },
        children
    );
}