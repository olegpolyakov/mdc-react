import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Banner);

function Banner({
    text,
    icon,
    action,
    primaryAction = action,
    secondaryAction,
    open = true,
    appear = true,
    fixed = false,
    centered = false,
    mobileStacked = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) {
    const classNames = classnames('mdc-banner', {
        'mdc-banner--centered': centered,
        'mdc-banner--mobile-stacked': mobileStacked
    }, className);

    const content = (
        <div className="mdc-banner__content">
            <div className="mdc-banner__graphic-text-wrapper">
                {icon &&
                    <div className="mdc-banner__graphic">
                        {React.cloneElement(icon, {
                            className: classnames('mdc-banner__icon', icon.props.className)
                        })}
                    </div>
                }

                {React.isValidElement(children) ?
                    React.cloneElement(children, {
                        className: classnames('mdc-banner__text', children.props.className)
                    })
                    :
                    <div className="mdc-banner__text">{children}</div>
                }
            </div>

            {primaryAction &&
                <div className="mdc-banner__actions">
                    {secondaryAction &&
                        React.cloneElement(secondaryAction, {
                            className: classnames('mdc-banner__secondary-action', secondaryAction.props.className)
                        })
                    }

                    {React.cloneElement(primaryAction, {
                        className: classnames('mdc-banner__primary-action', primaryAction.props.className)
                    })}
                </div>
            }
        </div>
    );

    return (
        <CSSTransition
            in={open}
            appear={appear}
            timeout={{
                enter: 300,
                exit: 250
            }}
            classNames={{
                appear: 'mdc-banner--open',
                appearDone: 'mdc-banner--open',
                enter: 'mdc-banner--opening',
                enterDone: 'mdc-banner--open',
                exit: 'mdc-banner--closing'
            }}
        >
            <Element ref={ref} className={classNames} {...props}>
                {fixed ?
                    <div class="mdc-banner__fixed">
                        {content}
                    </div>
                    :
                    content
                }
            </Element>
        </CSSTransition>
    );
}

Banner.displayName = 'MDCBanner';

Banner.propTypes = {
    text: PropTypes.node,
    icon: PropTypes.element,
    action: PropTypes.element,
    primaryAction: PropTypes.element,
    secondaryAction: PropTypes.element,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    fixed: PropTypes.bool,
    centered: PropTypes.bool,
    mobileStacked: PropTypes.bool
};