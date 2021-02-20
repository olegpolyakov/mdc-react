import React, { useRef, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cssClasses, numbers } from '@material/banner';

import Icon from '../Icon';

export default React.forwardRef(Banner);

function Banner({
    text,
    icon,
    action,
    primaryAction = action,
    secondaryAction,
    open = false,
    fixed = false,
    centered = false,
    mobileStacked = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) {
    const contentRef = useRef();

    // useMounted(() => {
    //     if (open) {
    //         const { height } = contentRef.current?.getBoundingClientRect();

    //         console.log(height);
    //     }
    // });

    const handleEntering = useCallback(node => {
        node.style.height = `${contentRef.current.offsetHeight}px`;
    }, []);

    const handleExiting = useCallback(node => {
        node.style.height = '0px';
    }, []);

    const classNames = classnames('mdc-banner', {
        'mdc-banner--fixed': fixed,
        'mdc-banner--centered': centered,
        'mdc-banner--mobile-stacked': mobileStacked
    }, className);

    const content = (
        <div ref={contentRef} className="mdc-banner__content" role="status">
            <div className="mdc-banner__graphic-text-wrapper">
                {icon &&
                    <div className="mdc-banner__graphic">
                        {React.cloneElement((React.isValidElement(icon) ? icon : React.createElement(Icon)), {
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
            appear={open}
            timeout={{
                enter: numbers.BANNER_ANIMATION_OPEN_TIME_MS,
                exit: numbers.BANNER_ANIMATION_CLOSE_TIME_MS
            }}
            classNames={{
                appear: cssClasses.OPEN,
                appearDone: cssClasses.OPEN,
                enter: cssClasses.OPENING,
                enterActive: cssClasses.OPEN,
                enterDone: cssClasses.OPEN,
                exit: cssClasses.CLOSING
            }}
            mountOnEnter
            unmountOnExit
            onEntering={handleEntering}
            onExiting={handleExiting}
        >
            <Element ref={ref} className={classNames} role="banner" {...props}>
                {content}
            </Element>
        </CSSTransition>
    );
}

Banner.displayName = 'MDCBanner';

Banner.propTypes = {
    text: PropTypes.node.isRequired,
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