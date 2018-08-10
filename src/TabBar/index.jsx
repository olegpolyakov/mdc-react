import React from 'react';
import classnames from 'classnames';

import TabScroller from '../TabScroller';

import './index.scss';

export default class TabBar extends React.Component {
    static defaultProps = {
        element: 'nav',
        fade: false,
        underline: true,
        onChange: Function.prototype
    };

    tabs = new Map();

    get activeTab() {
        return this.tabs.get(this.props.value);
    }

    handleTabActivate = value => {
        this.previousIndicatorClientRect = this.activeTab.indicator.clientRect;
        this.props.onChange(value);
    };

    render() {
        const {
            value,
            fade,
            underline,
            onChange,

            element,
            component = element,
            className,
            children,
            ...props
        } = this.props;
        
        return React.createElement(component, {
                ref: element => this.root = element,
                className: classnames('mdc-tab-bar', className),
                role: 'tablist',
                ...props
            },
            <TabScroller>
                {React.Children.map(children, (tab, index) => {
                    return React.cloneElement(tab, {
                        ref: component => this.tabs.set((tab.props.value || index), component),
                        value: tab.props.value || index,
                        active: (tab.props.value || index) === value,
                        fade,
                        underline,
                        previousIndicatorClientRect: this.previousIndicatorClientRect,
                        onActivate: this.handleTabActivate
                    })
                })}
            </TabScroller>
        );
    }
}