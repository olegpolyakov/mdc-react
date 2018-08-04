import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Button extends React.Component {
    static defaultProps = {
        element: 'button',
        raised: false,
        unelevated: false,
        outlined: false,
        dense: false,
        onClick: Function.prototype
    };

    render() {
        const {
            element,
            component = element,
            text,
            raised,
            unelevated,
            outlined,
            dense,
            icon,
            className,
            children,
            ...props
        } = this.props;
        
        return React.createElement(component, {
            className: classnames('mdc-button', {
                'mdc-button--raised': raised,
                'mdc-button--unelevated': unelevated,
                'mdc-button--outlined': outlined,
                'mdc-button--dense': dense
            }, className),
            ...props
        },
            icon && React.cloneElement(icon, { className: 'mdc-button__icon' }),

            text,

            children
        );
    }
}