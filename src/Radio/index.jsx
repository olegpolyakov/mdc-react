import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Radio extends React.Component {
    static defaultProps = {
        checked: false,
        disabled: false,
        onChange: Function.prototype
    }

    componentDidUpdate() {
        this.input.blur();
    }

    handleChange = event => this.props.onChange(this.props.value, this.input, event);

    render() {
        const {
            checked,
            disabled,
            onChange,
            
            className,
            ...props
        } = this.props;

        return React.createElement('div', {
            className: classnames('mdc-radio', {
                'mdc-radio--disabled': disabled
            }, className)
        },
            React.createElement('input', {
                ref: element => this.input = element,
                className: 'mdc-radio__native-control',
                type: 'radio',
                checked,
                disabled,
                onChange: this.handleChange,
                ...props
            }),

            React.createElement('div', { className: 'mdc-radio__background' },
                React.createElement('div', { className: 'mdc-radio__outer-circle' }),
                React.createElement('div', { className: 'mdc-radio__inner-circle' }),
            )
        );
    }
}