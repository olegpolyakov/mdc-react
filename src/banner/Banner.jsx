import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { numbers, cssClasses } from './constants';

const Banner = forwardRef(({
    text,
    icon,
    graphic = icon,
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
}, ref) => {
    const rootRef = useRef();
    const contentRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    const handleEntering = useCallback((node, isAppearing) => {
        if (!isAppearing) {
            node.style.height = `${contentRef.current.offsetHeight}px`;
        }
    }, []);

    const handleExiting = useCallback(node => {
        node.style.height = '0px';
    }, []);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FIXED]: fixed,
        [cssClasses.CENTERED]: centered,
        [cssClasses.MOBILE_STACKED]: mobileStacked
    }, className);

    const content = (
        <div ref={contentRef} className={cssClasses.CONTENT} role="status">
            <div className={cssClasses.GRAPHIC_TEXT_WRAPPER}>
                {graphic &&
                    <div className={cssClasses.GRAPHIC}>
                        <Clone
                            component={graphic}
                            fallback={Icon}
                            className={cssClasses.ICON}
                        />
                    </div>
                }

                <Clone
                    component={children}
                    fallback="div"
                    className={cssClasses.TEXT}
                />
            </div>

            {primaryAction &&
                <div className={cssClasses.ACTIONS}>
                    {secondaryAction &&
                        <Clone
                            component={secondaryAction}
                            className={cssClasses.SECONDARY_ACTION}
                        />
                    }

                    <Clone
                        component={primaryAction}
                        className={cssClasses.PRIMARY_ACTION}
                    />
                </div>
            }
        </div>
    );

    return (
        <CSSTransition
            in={open}
            appear={open}
            timeout={{
                appear: 0,
                enter: numbers.BANNER_ANIMATION_OPEN_TIME_MS,
                exit: numbers.BANNER_ANIMATION_CLOSE_TIME_MS
            }}
            classNames={{
                appear: cssClasses.APPEARING,
                appearDone: cssClasses.APPEARED,
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
            <Element ref={rootRef} className={classNames} role="banner" {...props}>
                {content}
            </Element>
        </CSSTransition>
    );
});

Banner.displayName = 'MDCBanner';

Banner.propTypes = {
    text: PropTypes.node.isRequired,
    icon: PropTypes.node,
    graphic: PropTypes.element,
    action: PropTypes.element,
    primaryAction: PropTypes.element,
    secondaryAction: PropTypes.element,
    open: PropTypes.bool,
    appear: PropTypes.bool,
    fixed: PropTypes.bool,
    centered: PropTypes.bool,
    mobileStacked: PropTypes.bool
};

export default Banner;