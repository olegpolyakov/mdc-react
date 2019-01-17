import React from 'react';
import classnames from 'classnames';

import './index.scss';

Button.displayName = 'MDCButton';

export default function Button({
    label,
    raised = false,
    unelevated = false,
    outlined = false,
    dense = false,
    icon,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}) {
    const classNames = classnames('mdc-button', {
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined,
        'mdc-button--dense': dense
    }, className);

    return (
        <Element className={classNames} {...props}>
            {icon && React.cloneElement(icon, { className: 'mdc-button__icon', 'aria-hidden': 'true' })}
            
            <span className="mdc-button__label">{children}</span>
        </Element>
    );
}