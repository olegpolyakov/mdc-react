import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Checkbox extends React.Component {
    static defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false,
        onChange: Function.prototype
    };

    componentDidUpdate() {
        this.input.blur();
    }

    handleChange = event => this.props.onChange(this.input, event);

    render() {
        const {
            checked,
            indeterminate,
            disabled,
            onChange,
            
            className, 
            ...props
        } = this.props;

        return React.createElement('div', {
            className: classnames('mdc-checkbox', {
                'mdc-checkbox--checked': checked,
                'mdc-checkbox--indeterminate': indeterminate,
                'mdc-checkbox--disabled': disabled
            }, className)
        },
            React.createElement('input', {
                ref: element => this.input = element,
                className: 'mdc-checkbox__native-control',
                type: 'checkbox',
                checked,
                disabled,
                onChange: this.handleChange,
                ...props
            }),

            React.createElement('div', { className: 'mdc-checkbox__background' },
                React.createElement('svg', { className: 'mdc-checkbox__checkmark', viewBox: '0 0 24 24' },
                    React.createElement('path', {
                        className: 'mdc-checkbox__checkmark-path',
                        fill: 'none',
                        stroke: 'white',
                        d: 'M1.73,12.91 8.1,19.28 22.79,4.59'
                    })
                ),
                React.createElement('div', { className: 'mdc-checkbox__mixedmark' }),
            )
        );
    }
}