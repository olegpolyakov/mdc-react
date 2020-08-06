import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(IconButton);

function IconButton({
    icon,
    onIcon,
    offIcon,
    onTitle,
    offTitle,
    on,

    element = 'button',
    component: Element = element,
    className,
    children = icon,
    ...props
}, ref) {
    const classNames = classnames('mdc-icon-button', {
        'mdc-icon-button--on': on,
        'material-icons': typeof children === 'string'
    }, className);

    const title = typeof on === 'boolean' ? (on ? onTitle : offTitle) : on;

    return (
        <Element ref={ref} className={classNames} title={title} {...props}>
            {onIcon && React.cloneElement(onIcon, {
                className: 'mdc-icon-button__icon mdc-icon-button__icon--on'
            })}

            {offIcon && React.cloneElement(offIcon, {
                className: 'mdc-icon-button__icon'
            })}

            {React.isValidElement(children) ?
                React.cloneElement(children, {
                    className: 'mdc-icon-button__icon'
                })
                :
                children
            }
        </Element>
    );
}

IconButton.displayName = 'MDCIconButton';

IconButton.propTypes = {
    icon: PropTypes.element,
    onIcon: PropTypes.element,
    offIcon: PropTypes.element,
    onTitle: PropTypes.string,
    offTitle: PropTypes.string,
    on: PropTypes.bool
};