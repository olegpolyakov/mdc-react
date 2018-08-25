import React from 'react';
import classnames from 'classnames';

import TabScroller from '../TabScroller';

import './index.scss';

export default class TabBar extends React.Component {
    static defaultProps = {
        element: 'nav',
        stacked: false,
        minWidth: false,
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
            stacked,
            minWidth,
            fade,
            underline,
            align,
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
            React.createElement(TabScroller, { align },
                React.Children.map(children, (tab, index) => 
                    tab && React.cloneElement(tab, {
                        ref: component => this.tabs.set((tab.props.value || index), component),
                        value: tab.props.value || index,
                        active: (tab.props.value || index) === value,
                        stacked: tab.props.stacked || stacked,
                        minWidth: tab.props.minWidth || minWidth,
                        fade,
                        underline,
                        previousIndicatorClientRect: this.previousIndicatorClientRect,
                        onActivate: this.handleTabActivate
                    })
                )
            )
        );
    }
}