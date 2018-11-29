import React from 'react';
import classnames from 'classnames';

import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import HelperText from './HelperText';

import './index.scss';

export default class TextField extends React.Component {
    static defaultProps = {
        element: 'div',
        type: 'text',
        validationMessage: false,
        onChange: Function.prototype
    };

    state = {
        focused: false,
        valid: this.isValid
    };

    get isValid() {
        return this.input ? this.input.validity.valid : true;
    }

    get value() {
        return this.input ? this.input.value : undefined;
    }

    get validationMessage() {
        if (typeof this.props.validationMessage === 'string') {
            return this.props.validationMessage;
        } else if (this.props.validationMessage === true) {
            return this.input ? this.input.validationMessage : undefined;
        }
    }

    handleRootInteraction = event => {
        this.input.focus();
        this.setState({ focused: true });
    }

    handleInputInteraction = event => {
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        this.lineRippleTransformOrigin = coords.x - targetClientRect.left;
    };

    handleInputFocus = event => this.setState({ focused: true });

    handleInputBlur = event => {
        this.lineRippleTransformOrigin = undefined;
        this.setState({ focused: false });
    }

    handleInputChange = event => this.props.onChange(this.value, this.input, event);

    render() {
        const {
            fullWidth,
            outlined,
            dense,
            disabled,
            textarea,
            label,
            leadingIcon,
            trailingIcon,
            helperText,
            validationMessage,

            element,
            className,
            children,
            onChange,
            ...props
        } = this.props;
        const { focused } = this.state;

        return (
            <React.Fragment>
                {React.createElement(element, {
                    className: classnames('mdc-text-field', {
                        'mdc-text-field--outlined': outlined && !fullWidth,
                        'mdc-text-field--fullwidth': fullWidth,
                        'mdc-text-field--textarea': textarea,
                        'mdc-text-field--dense': dense,
                        'mdc-text-field--disabled': disabled,
                        'mdc-text-field--focused': focused,
                        'mdc-text-field--invalid': !this.isValid,
                        'mdc-text-field--with-leading-icon': leadingIcon,
                        'mdc-text-field--with-trailing-icon': trailingIcon,
                    }, 'mdc-text-field--upgraded', className)
                },
                    leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-text-field__icon',
                        tabIndex: '0',
                        role: 'button'
                    }),

                    React.createElement(textarea ? 'textarea' : 'input', {
                        ref: element => this.input = element,
                        className: 'mdc-text-field__input',
                        placeholder: fullWidth ? label : undefined,
                        disabled,
                        onChange: this.handleInputChange,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onMouseDown: this.handleInputInteraction,
                        onTouchStart: this.handleInputInteraction,
                        ...props
                    }),
                    
                    (label && !fullWidth) &&
                        <FloatingLabel
                            float={focused || this.props.value || !this.isValid}
                        >
                            {label}
                        </FloatingLabel>,
                    
                    trailingIcon && React.cloneElement(trailingIcon, {
                        className: 'mdc-text-field__icon',
                        tabIndex: '0',
                        role: 'button'
                    }),
        
                    (!fullWidth && !textarea && !outlined) &&
                        <LineRipple
                            active={focused}
                            center={this.lineRippleTransformOrigin}
                        />
                )}

                {(validationMessage && !valid) && <HelperText error>{this.validationMessage}</HelperText>}

                {helperText && <HelperText persistent>{helperText}</HelperText>}
            </React.Fragment>
        );
    }
}