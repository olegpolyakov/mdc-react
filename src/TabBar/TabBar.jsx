import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useMounted } from '../lifecycle-hooks';
import TabScroller from '../TabScroller';

export default function TabBar({
    value,
    stacked = false,
    minWidth = false,
    fade = false,
    underline = true,
    align,
    onChange = Function.prototype,

    element = 'nav',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const rootRef = useRef();
    const activeTabRef = useRef();
    const previousIndicatorClientRect = useRef();

    useMounted(() => {
        activeTabRef.current = rootRef.current.querySelector('.mdc-tab--active');
    });

    const handleTabClick = useCallback((element, value) => {
        const previousTab = activeTabRef.current;

        previousIndicatorClientRect.current = previousTab.getBoundingClientRect();
        activeTabRef.current = element;

        onChange(value);
    }, []);

    const classNames = classnames('mdc-tab-bar', className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            role="tablist"
            {...props}
        >
            <TabScroller
                align={align}
                activeTab={activeTabRef.current}
            >
                {React.Children.map(children, (tab, index) =>
                    React.cloneElement(tab, {
                        value: tab.props.value || index,
                        active: (tab.props.value || index) === value,
                        stacked: tab.props.stacked || stacked,
                        minWidth: tab.props.minWidth || minWidth,
                        fade,
                        underline,
                        previousIndicatorClientRect: previousIndicatorClientRect.current,
                        onClick: handleTabClick
                    })
                )}
            </TabScroller>
        </Element>
    );
}

TabBar.displayName = 'MDCTabBar';

TabBar.propTypes = {
    stacked: PropTypes.bool,
    minWidth: PropTypes.bool,
    fade: PropTypes.bool,
    underline: PropTypes.bool,
    onChange: PropTypes.func
};