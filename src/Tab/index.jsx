import React from 'react';
import classnames from 'classnames';

export default class Tab extends React.Component {
    state = {
        transitioning: false
    };

    handleTransitionEnd = event => this.setState({ transitioning: false });

    render() {
        const { element = 'button', icon, label, active, className, children, ...props } = this.props;
        const { transitioning } = this.state;
        
        return React.createElement(element,
            {
                ref: element => ref = element,
                role: 'tab',
                className: classnames('mdc-tab', {
                    'mdc-tab--active': active,
                    'mdc-tab--animating-activate': active === true && transitioning,
                    'mdc-tab--animating-deactivate': active === false && transitioning,
                }, className),
                onTransitionEnd: this.handleTransitionEnd,
                ...props
            },
            React.createElement('div', { className: 'mdc-tab__content' }, 
                icon && React.createElement('span', { className: 'mdc-tab__icon' }),
                React.createElement('span', { className: 'mdc-tab__text-label' }, label || children)
            )
        );
    }
}