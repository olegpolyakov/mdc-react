import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    const rootRef = React.useRef();
    const activeTabRef = React.useRef();
    const previousIndicatorClientRect = React.useRef();

    const classNames = classnames('mdc-tab-bar', className);

    function handleTabActivate(value, element) {
        activeTabRef.current = element;
        const previousTab = rootRef.current.querySelector('.mdc-tab--active');

        previousIndicatorClientRect.current = previousTab.getBoundingClientRect();

        onChange(value);
    }
    
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
                        onActivate: handleTabActivate
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