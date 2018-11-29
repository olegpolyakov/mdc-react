import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Layout({
    row,
    column,
    direction,
    alignItems,
    alignSelf,
    justifyContent,

    element = 'div',
    component = element,
    className,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-layout', {
        'mdc-layout--row': row,
        'mdc-layout--column': column,
        [`mdc-layout--direction--${direction}`]: direction,
        [`mdc-layout--align-items--${alignItems}`]: alignItems,
        [`mdc-layout--align-self--${alignSelf}`]: alignSelf,
        [`mdc-layout--justify-content--${justifyContent}`]: justifyContent
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}