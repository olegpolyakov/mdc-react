import React from 'react';
import classnames from 'classnames';

export default class TabBar extends React.Component {
    static defaultProps = {
        element: 'nav',
        onChange: Function.prototype
    };

    tabs = new Map();

    get width() {
        return this.root.offsetWidth;
    }

    get activeTab() {
        return this.tabs.get(this.props.value);
    }

    get indicatorTanslateX() {
        return this.activeTab ? this.activeTab.left : 0;
    }

    get indicatorScale() {
        return this.activeTab ? this.activeTab.width / this.width : 0;
    }

    componentDidMount() {
        this.forceUpdate();
    }

    render() {
        const { element, value, className, children, onChange, ...props } = this.props;
        
        return React.createElement(element, {
                ref: element => this.root = element,
                className: classnames('mdc-tab-bar', className),
                ...props
            },

                React.Children.map(children, (tab, index) => {
                    return React.cloneElement(tab, {
                        ref: element => this.tabs.set(tab.props.value || index, element),
                        active: (tab.props.value || index) === value,
                        onSelect: value => onChange(value || index)
                    })
                }),

                React.createElement('span', {
                    className: 'mdc-tab-bar__indicator',
                    ref: element => this.indicator = element,
                    style: {
                        visibility: 'visible',
                        transform: `translateX(${this.indicatorTanslateX}px) scale(${this.indicatorScale}, 1)`
                    }
                })
        );
    }
}