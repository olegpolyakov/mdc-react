import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Banner);

function Banner({
    text,
    icon,
    actions,
    persistent = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) {
    const classNames = classnames('mdc-banner', {
        'mdc-banner--persistent': persistent
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className="mdc-banner__inner">
                <div className="mdc-banner__content">
                    {icon &&
                        React.cloneElement(icon, {
                            className: classnames('mdc-banner__icon', icon.props.className)
                        })
                    }

                    {React.isValidElement(children) ?
                        React.cloneElement(children, {
                            className: classnames('mdc-banner__text', children.props.className)
                        })
                        :
                        <span className="mdc-banner__text">{children}</span>
                    }
                </div>

                {actions &&
                    <div className="mdc-banner__actions">
                        {React.Children.map(actions, action =>
                            React.cloneElement(action, {
                                className: classnames('mdc-banner__action', action.props.className)
                            })
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