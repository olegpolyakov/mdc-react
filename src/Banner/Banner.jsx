import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Banner({
    text,
    icon,
    actions,
    persistent = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}) {
    const classNames = classnames('mdc-banner', {
        'mdc-banner--persistent': persistent
    }, className);

    return (
        <Element className={classNames} {...props}>
            <div className="mdc-banner__inner">
                <div className="mdc-banner__content">
                    {icon && React.cloneElement(icon, { className: 'mdc-banner__icon' })}

                    {React.isValidElement(children) ?
                        React.cloneElement(children, { className: 'mdc-banner__text' })
                        :
                        <span className="mdc-banner__text">{children}</span>
                    }
                </div>

                {actions &&
                    <div className="mdc-banner__actions">
                        {React.Children.map(actions, action =>
                            React.cloneElement(action, { className: 'mdc-banner__action' })
                        )}
                    </div>
                }
            </div>
        </Element>
    );
}

Banner.displayName = 'MDCBanner';

Banner.propTypes = {
    text: PropTypes.node,
    icon: PropTypes.element,
    actions: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    persistent: PropTypes.bool
};