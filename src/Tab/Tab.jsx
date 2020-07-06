import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TabIndicator from '../TabIndicator';

export default function Tab({
    value,
    icon,
    label,
    active = false,
    stacked = false,
    minWidth = false,
    fade = false,
    underline = true,
    previousIndicatorClientRect,
    onActivate = Function.prototype,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}) {
    const rootRef = useRef();

    const handleClick = useCallback(() => {
        onActivate(value, rootRef.current);
    }, [value]);

    const classNames = classnames('mdc-tab', {
        'mdc-tab--active': active,
        'mdc-tab--stacked': stacked,
        'mdc-tab--min-width': minWidth
    }, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            role='tab'
            aria-selected={active ? 'true' : 'false'}
            tabIndex={active ? '0' : '-1'}
            onClick={handleClick}
            {...props}
        >
            <div className="mdc-tab__content">
                {icon &&
                    React.cloneElement(icon, { className: 'mdc-tab__icon' })
                }

                {children &&
                    <span className="mdc-tab__text-label">{children}</span>
                }
            </div>

            <TabIndicator
                active={active}
                fade={fade}
                underline={underline}
                previousIndicatorClientRect={previousIndicatorClientRect}
            />

            <span className="mdc-tab__ripple" />
        </Element>
    );
}

Tab.displayName = 'MDCTab';

Tab.propTypes = {
    active: PropTypes.bool,
    stacked: PropTypes.bool,
    minWidth: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool,
    onActivate: PropTypes.func
};