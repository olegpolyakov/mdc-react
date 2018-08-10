import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Switch extends React.Component {
    static defaultProps = {
        checked: false,
        disabled: false,
        onChange: Function.prototype
    };

    handleChange = event => this.props.onChange(!this.props.checked, event);

    render() {
        const {
            checked, disabled, onChange,
            className, ...props
        } = this.props;

        return React.createElement('div', {
            className: classnames('mdc-switch', {
                'mdc-switch--checked': checked,
                'mdc-switch--disabled': disabled
            }, className)
        },
            React.createElement('div', { className: 'mdc-switch__track' }),
            React.createElement('div', { className: 'mdc-switch__thumb-underlay' },
                React.createElement('div', { className: 'mdc-switch__thumb' },
                    React.createElement('input', {
                        type: 'checkbox',
                        className: 'mdc-switch__native-control',
                        role: 'switch',
                        checked,
                        disabled,
                        onChange: this.handleChange,
                        ...props
                    })
                )
            )
        );
    }
}