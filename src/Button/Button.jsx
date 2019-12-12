import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({
    label,
    raised = false,
    unelevated = false,
    outlined = false,
    icon,
    leadingIcon = icon,
    trailingIcon,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}) {
    const classNames = classnames('mdc-button', {
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined
    }, className);

    return (
        <Element className={classNames} {...props}>
            <div className="mdc-button__ripple"></div>

            {leadingIcon && React.cloneElement(leadingIcon, { className: 'mdc-button__icon', 'aria-hidden': 'true' })}
            
            <span className="mdc-button__label">{children}</span>

            {trailingIcon && React.cloneElement(trailingIcon, { className: 'mdc-button__icon', 'aria-hidden': 'true' })}
        </Element>
    );
}

Button.displayName = 'MDCButton';

Button.propTypes = {
    label: PropTypes.string,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool,
    icon: PropTypes.element,
    leadingIcon: PropTypes.element,
    trailingIcon: PropTypes.element
};