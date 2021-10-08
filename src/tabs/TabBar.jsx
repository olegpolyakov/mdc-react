import { Children, forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined } from '../types';
import { create, clone } from '../component';

import { barCssClasses as cssClasses, tabClassNames, Align } from './constants';
import TabContext from './context';
import Tab from './Tab';
import TabScroller from './TabScroller';

const TabBar = forwardRef(({
    tabs,
    value,
    align,
    indicatorIcon,
    stacked = false,
    minWidth = false,
    minWidthIndicator = false,
    fade = false,
    iconIndicator = Boolean(indicatorIcon),
    underlineIndicator = !iconIndicator,
    onChange = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = tabs?.map(tab => create(Tab, tab)),
    ...props
}, ref) => {
    const rootRef = useRef();
    const activeTabRef = useRef();
    const previousTabRef = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useEffect(() => {
        activeTabRef.current = rootRef.current.querySelector(`.${tabClassNames.ACTIVE}`);
    }, []);

    const handleTabClick = useCallback((element, value) => {
        previousTabRef.current = activeTabRef.current;
        activeTabRef.current = element;
        onChange(value);
    }, [onChange]);

    const classNames = classnames(cssClasses.ROOT, className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            role="tablist"
            {...props}
        >
            {!isUndefined(value) ?
                <TabContext.Provider value={{
                    activeTab: activeTabRef.current,
                    previousTab: previousTabRef.current
                }}>
                    <TabScroller
                        align={align}
                        activeTab={activeTabRef.current}
                    >
                        {Children.map(children, (tab, index) => {
                            const tabValue = isUndefined(tab.props.value) ? index : tab.props.value;

                            return clone(tab, {
                                value: tabValue,
                                active: tabValue === value,
                                indicatorIcon: tab.props.indicatorIcon || indicatorIcon,
                                stacked: tab.props.stacked || stacked,
                                minWidth: tab.props.minWidth || minWidth,
                                minWidthIndicator: tab.props.minWidthIndicator || minWidthIndicator,
                                fade,
                                underline: underlineIndicator,
                                onClick: handleTabClick
                            });
                        })}
                    </TabScroller>
                </TabContext.Provider>
                :
                children
            }
        </Element>
    );
});

TabBar.displayName = 'MDCTabBar';

TabBar.propTypes = {
    align: PropTypes.oneOf(Object.values(Align)),
    indicatorIcon: PropTypes.node,
    stacked: PropTypes.bool,
    minWidth: PropTypes.bool,
    fade: PropTypes.bool,
    iconIndicator: PropTypes.bool,
    underlineIndicator: PropTypes.bool,
    onChange: PropTypes.func
};

TabBar.Align = Align;

export default TabBar;