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

    handleClick = event => {
        this.root.blur();
        this.props.onClick(event);
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
            onClick,
            ...props
        } = this.props;
        
        return React.createElement(component || element,
            {
                ref: element => this.root = element,
                className: classnames('mdc-button', className, {
                    'mdc-button--raised': raised,
                    'mdc-button--unelevated': unelevated,
                    'mdc-button--outlined': outlined,
                    'mdc-button--dense': dense
                }),
                onClick: this.handleClick,
                ...props
            },

            icon && React.cloneElement(icon, { className: 'mdc-button__icon' }),
            text || children
        );
    }
}