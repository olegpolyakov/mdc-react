import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Button({
    text,
    raised = false,
    unelevated = false,
    outlined = false,
    dense = false,
    icon,

    element = 'button',
    component = element,
    className,
    children = text,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-button', {
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': dense
    }, className);

    return (
        <Element className={classNames} {...props}>
            {icon && React.cloneElement(icon, { className: 'mdc-button__icon' })}
            
            {children}
        </Element>
    );
}