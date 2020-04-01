import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function IconButton({
    on = false,
    icon,
    onIcon,
    offIcon,
    onLabel,
    offLabel,
    
    element = 'button',
    component: Element = element,
    className,
    children,
    ...props
}) {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            component: Element,
            className: classnames('mdc-icon-button', className),
            ...props
        });
    } else {
        const classNames = classnames('mdc-icon-button', {
            'mdc-icon-button--on': on
        }, className);

        return (
            <Element className={classNames} {...props}>
                {onIcon && React.cloneElement(onIcon, {
                    className: 'mdc-icon-button__icon mdc-icon-button__icon--on',
                    title: onLabel
                })}
                
                {offIcon && React.cloneElement(offIcon, {
                    className: 'mdc-icon-button__icon',
                    title: offLabel
                })}

                {icon && React.cloneElement(icon, {
                    className: 'mdc-icon-button__icon',
                    title: offLabel
                })}
            </Element>
        );
    }
}

IconButton.displayName = 'MDCIconButton';

IconButton.propTypes = {
    on: PropTypes.bool,
    icon: PropTypes.element,
    onIcon: PropTypes.element,
    offIcon: PropTypes.element,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string
};