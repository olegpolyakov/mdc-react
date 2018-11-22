import React from 'react';
import classnames from 'classnames';

export default function Card({
    outlined = false,
    
    element = 'div',
    component = element,
    className,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-card', {
        'mdc-card--outlined': outlined
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}