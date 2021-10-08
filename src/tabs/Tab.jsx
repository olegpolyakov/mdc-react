import { forwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { tabClassNames as cssClasses } from './constants';
import TabIndicator from './TabIndicator';

const Tab = forwardRef(({
    value,
    icon,
    label,
    indicatorIcon,
    active = false,
    stacked = false,
    minWidth = false,
    minWidthIndicator = false,
    fade = false,
    underline = !indicatorIcon,
    onClick = Function.prototype,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) => {
    const rootRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    const handleClick = useCallback(() => {
        onClick(rootRef.current, value);
    }, [value, onClick]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ACTIVE]: active,
        [cssClasses.STACKED]: stacked,
        [cssClasses.MIN_WIDTH]: minWidth
    }, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            data-value={value}
            role="tab"
            aria-selected={active ? 'true' : 'false'}
            tabIndex={active ? 0 : -1}
            onClick={handleClick}
            {...props}
        >
            <div className={cssClasses.CONTENT}>
                {icon &&
                    <Clone
                        component={icon}
                        fallback={Icon}
                        className={cssClasses.ICON}
                    />
                }

                {children &&
                    <span className={cssClasses.LABEL}>{children}</span>
                }

                {minWidthIndicator &&
                    <TabIndicator
                        icon={indicatorIcon}
                        active={active}
                        fade={fade}
                        underline={underline}
                    />
                }
            </div>

            {!minWidthIndicator &&
                <TabIndicator
                    icon={indicatorIcon}
                    active={active}
                    fade={fade}
                    underline={underline}
                />
            }

            <div className={cssClasses.RIPPLE} />
        </Element>
    );
});

Tab.displayName = 'MDCTab';

Tab.propTypes = {
    value: PropTypes.any,
    icon: PropTypes.node,
    label: PropTypes.node,
    indicatorIcon: PropTypes.node,
    active: PropTypes.bool,
    stacked: PropTypes.bool,
    minWidth: PropTypes.bool,
    minWidthIndicator: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool,
    onActivate: PropTypes.func
};

export default Tab;