import React from 'react';
import classnames from 'classnames';

import IndicatorContent from './IndicatorContent';

export default class SlidingTabIndicator extends React.Component {
    static defaultProps = {
        element: 'span',
        active: false,
    };
    
    state = {
        isSliding: false,
        hasSlid: false
    };

    get clientRect() {
        return this.content && this.content.clientRect;
    }

    get indicatorStyle() {
        const { previousIndicatorClientRect } = this.props;
        
        if (!previousIndicatorClientRect || !this.clientRect) return {};

        if (!this.state.isSliding && !this.state.hasSlid) {
            const widthDelta = previousIndicatorClientRect.width / this.clientRect.width;
            const xPosition = previousIndicatorClientRect.left - this.clientRect.left;

            return { transform: `translateX(${xPosition}px) scaleX(${widthDelta})` };
        } else if (this.state.hasSlid) {
            return { transform: undefined };
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.active === true && prevProps.active === false) {
            this.setState({ isSliding: true, hasSlid: false });
        } else if (this.props.active === false && prevProps.active === true) {
            this.setState({ isSliding: false, hasSlid: false });
        }
    }

    handleTransitionEnd = () => {
        this.setState({ isSliding: false, hasSlid: true });
    };

    render() {
        const { active, ...props } = this.props;
        const { isSliding } = this.state;

        return React.createElement('span', {
            ref: element => this.root = element,
            className: classnames('mdc-tab-indicator', {
                'mdc-tab-indicator--active': active,
                'mdc-tab-indicator--sliding-activate': isSliding
            })
        },
            React.createElement(IndicatorContent, {
                ref: component => this.content = component,
                style: this.indicatorStyle,
                onTransitionEnd: this.handleTransitionEnd,
                ...props
            })
        );
    }
}