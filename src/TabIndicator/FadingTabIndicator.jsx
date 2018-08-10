import React from 'react';
import classnames from 'classnames';

import IndicatorContent from './IndicatorContent';

export default class FadingTabIndicator extends React.Component {
    static defaultProps = {
        element: 'span'
    };

    state = {
        isFadingActivating: false,
        isFadingDeactivating: false
    };

    computeContentClientRect() {
        return this.content && this.content.getBoundingClientRect();
    }

    componentDidUpdate(prevProps) {
        if (this.props.active === true && prevProps.active === false) {
            this.setState({
                isFadingActivating: true
            });
        } else if (this.props.active === false && prevProps.active === true) {
            this.setState({
                isFadingDeactivating: true
            });
        }
    }

    handleTransitionEnd = () => this.setState({
        isFadingActivating: false,
        isFadingDeactivating: false
    });

    render() {
        const { element, component = element, className, children, ...props } = this.props;
        const { isFadingActivating, isFadingDeactivating } = this.state;

        return React.createElement(component, {
            ref: element => this.root = element,

            className: classnames(className, 'mdc-tab-indicator--fade', {
                'mdc-tab-indicator--fading-activate': isFadingActivating,
                'mdc-tab-indicator--fading-deactivate': isFadingDeactivating
            }),

            ...props
        },
            <IndicatorContent
                ref={component => this.content = component} {...props} 
            />
        );
    }
}