import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Layout({
    element = 'div',
    row,
    column,
    direction,
    alignItems,
    alignSelf,
    justifyContent,
    className,
    children,
    ...props
}) {
    return React.createElement(element, {
        className: classnames(className, 'mdc-layout', {
            'mdc-layout--row': row,
            'mdc-layout--column': column,
            [`mdc-layout--direction--${direction}`]: direction,
            [`mdc-layout--align-items--${alignItems}`]: alignItems,
            [`mdc-layout--align-self--${alignSelf}`]: alignSelf,
            [`mdc-layout--justify-content--${justifyContent}`]: justifyContent
        }),
        ...props
    }, children);
}