import React from 'react';
import classnames from 'classnames';

Card.displayName = 'MDCCard';

export default function Card({
    outlined = false,
    
    element = 'div',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-card', {
        'mdc-card--outlined': outlined
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}