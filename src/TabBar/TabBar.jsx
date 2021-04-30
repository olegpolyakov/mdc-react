import React, { farwardRef, useRef, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';
import TabScroller from '../TabScroller';

export default farwardRef(TabBar);

function TabBar({
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
}, ref) {
    const rootRef = useRef();
    const activeTabRef = useRef();
    const previousTabRef = useRef();
    const previousIndicatorClientRect = useRef();

    useImperativeHandle(ref, () => rootRef.current);

    useMounted(() => {
        activeTabRef.current = rootRef.current.querySelector('.mdc-tab--active');
    });

    useUpdated(() => {
        previousIndicatorClientRect.current = previousTabRef.current.getBoundingClientRect();
    }, [value]);

    const handleTabClick = useCallback((element, value) => {
        previousTabRef.current = activeTabRef.current;
        activeTabRef.current = element;
        onChange(value);
    }, [onChange]);

    const classNames = classnames('mdc-tab-bar', className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            role="tablist"
            {...props}
        >
            {value ?
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
                :
                children
            }
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