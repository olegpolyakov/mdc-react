import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(CardHeader);

function CardHeader({
    graphic,
    title,
    subtitle,
    actions,
    large = false,

    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__header', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {graphic &&
                React.cloneElement(graphic, {
                    className: classnames(graphic.props.className, 'mdc-card__header__graphic')
                })
            }

            <div className="mdc-card__header__text">
                {React.isValidElement(title) ?
                    React.cloneElement(title, {
                        className: classnames(title.props.className, 'mdc-card__header__title')
                    })
                    :
                    <h2 className="mdc-card__header__title">{title}</h2>
                }

                {subtitle && (React.isValidElement(subtitle) ?
                    React.cloneElement(subtitle, {
                        className: classnames(subtitle.props.className, 'mdc-card__header__subtitle')
                    })
                    :
                    <h3 className="mdc-card__header__subtitle">{subtitle}</h3>
                )}
            </div>

            {children}

            {actions &&
                <div className="mdc-card__header__actions">
                    {React.Children.map(actions, action =>
                        React.cloneElement(action, {
                            className: classnames(action.props.className, 'mdc-card__action')
                        })
                    )}
                </div>
            }
        </Element>
    );
}

CardHeader.displayName = 'MDCCardHeader';

CardHeader.propTypes = {
    graphic: PropTypes.element,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    actions: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    large: PropTypes.bool
};