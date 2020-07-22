import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default forwardRef(Button);

function Button({
    label,
    icon,
    leadingIcon = icon,
    trailingIcon,
    raised = false,
    unelevated = false,
    outlined = false,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) {
    const classNames = classnames('mdc-button', {
        'mdc-button--raised': raised,
        'mdc-button--unelevated': unelevated,
        'mdc-button--outlined': outlined
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className="mdc-button__ripple" />

            {leadingIcon &&
                React.cloneElement(leadingIcon, {
                    className: 'mdc-button__icon',
                    'aria-hidden': 'true'
                })
            }

            <span className="mdc-button__label">{children}</span>

            {trailingIcon &&
                React.cloneElement(trailingIcon, {
                    className: 'mdc-button__icon',
                    'aria-hidden': 'true'
                })
            }
        </Element>
    );
}

Button.displayName = 'MDCButton';

Button.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    leadingIcon: PropTypes.element,
    trailingIcon: PropTypes.element,
    raised: PropTypes.bool,
    unelevated: PropTypes.bool,
    outlined: PropTypes.bool
};