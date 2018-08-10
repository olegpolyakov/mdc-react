import React from 'react';
import classnames from 'classnames';

import { FadingTabIndicator, SlidingTabIndicator } from '../TabIndicator';

import './index.scss';

export default class Tab extends React.Component {
    static defaultProps = {
        element: 'button',
        active: false,
        stacked: false,
        minWidth: false,
        fade: false,
        underline: true,
        onActivate: Function.prototype
    };

    state = {
        isTransitioning: false,
        isTransitionActivating: false,
        isTransitionDeactivating: false
    };

    get isActive() {
        return this.props.active;
    }

    componentDidUpdate(prevProps) {
        if (this.props.active === true && prevProps.active === false) {
            this.setState({
                isTransitioning: true,
                isTransitionActivating: true,
                isTransitionDeactivating: false
            });
        } else if (this.props.active === false && prevProps.active === true) {
            this.setState({
                isTransitioning: true,
                isTransitionActivating: false,
                isTransitionDeactivating: true
            });
        }
    }

    handleClick = event => {
        this.props.onActivate(this.props.value);
    };

    handleTransitionEnd = event => {
        if (this.state.isTransitioning) {
            this.setState({
                isTransitioning: false,
                isTransitionActivating: false,
                isTransitionDeactivating: false
            });
        }
    };

    render() {
        const {
            value,
            icon,
            label,
            active,
            stacked,
            minWidth,
            fade,
            underline,
            previousIndicatorClientRect,
            onActivate,

            element,
            component = element,
            className,
            children = label,
            ...props
        } = this.props;
        const { isTransitioning, isTransitionActivating, isTransitionDeactivating } = this.state;
        
        return React.createElement(component, {
            ref: element => this.root = element,
            className: classnames('mdc-tab', {
                'mdc-tab--active': active,
                'mdc-tab--stacked': stacked,
                'mdc-tab--min-width': minWidth,
                'mdc-tab--animating-activate': isTransitioning && isTransitionActivating,
                'mdc-tab--animating-deactivate': isTransitioning && isTransitionDeactivating,
            }, className),
            role: 'tab',
            'aria-selected': active ? 'true' : 'false',
            tabIndex: active ? '0' : '-1',
            onClick: this.handleClick,
            onTransitionEnd: this.handleTransitionEnd,
            ...props
        },
            React.createElement('div', { className: 'mdc-tab__content' }, 
                icon && React.cloneElement(icon, { className: 'mdc-tab__icon' }),
                children && React.createElement('span', { className: 'mdc-tab__text-label' }, children)
            ),

            React.createElement(fade ? FadingTabIndicator : SlidingTabIndicator, {
                ref: component => this.indicator = component,
                active,
                fade,
                underline,
                previousIndicatorClientRect: active ? previousIndicatorClientRect : undefined
            }),

            React.createElement('span', {
                className: 'mdc-tab__ripple'
            })
        );
    }
}