import React from 'react';
import classnames from 'classnames';
import { MDCTabBarFoundation } from '@material/tabs';

import MaterialComponent from '../MaterialComponent';

export default class Tabs extends React.Component {
    static defaultProps = {
        onChange: Function.prototype
    };

    tabs = new Map();

    get width() {
        return this.root.offsetWidth;
    }

    get activeTab() {
        return this.tabs.get(this.state.activeTabIndex);
    }

    get indicatorTanslateX() {
        return this.activeTab ? this.activeTab.left : 0;
    }

    get indicatorScale() {
        return this.activeTab ? this.activeTab.width / this.width : 0;
    }

    state = {
        ready: false,
        activeTabIndex: this.props.selectedTab || 0
    };

    handleTabSelect = (activeTabIndex) => {
        this.setState({ activeTabIndex });
    };

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        const { element = 'nav', children, ...props } = this.props;
        const { activeTabIndex } = this.state;

        return (
            <React.Fragment>
                {
                    React.createElement(element,
                        {
                            className: 'mdc-tab-bar',
                            ref: element => this.root = element,
                            ...props
                        },
                        React.Children.map(children, (tab, index) =>
                            React.cloneElement(tab, {
                                ref: element => this.tabs.set(index, element),
                                active: index === activeTabIndex,
                                onSelect: () => this.handleTabSelect(index)
                            })
                        ),
                        React.createElement('span', {
                            className: 'mdc-tab-bar__indicator',
                            ref: element => this.indicator = element,
                            style: {
                                visibility: 'visible',
                                transform: `translateX(${this.indicatorTanslateX}px) scale(${this.indicatorScale}, 1)`
                            }
                        })
                    )
                }

                {
                    React.Children.map(children, (tab, index) => 
                        index === activeTabIndex && tab.props.children
                    )
                }
            </React.Fragment>
        );
    }
}