import React from 'react';
import classnames from 'classnames';

import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import HelperText from './HelperText';

import './index.scss';

const VALIDATION_ATTR_WHITELIST = [
    'pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength',
];

const TextInput = React.forwardRef((props, ref) => (
    <input
        ref={ref}
        className="mdc-text-field__input"
        {...props}
    />
));

const TextArea = React.forwardRef((props, ref) => (
    <textarea
        ref={ref}
        className="mdc-text-field__input"
        rows="8"
        cols="40"
        {...props}
    />
));

const EditableDiv = React.forwardRef((props, ref) => (
    <div
        ref={ref}
        className="mdc-text-field__input"
        contentEditable
        {...props}
    />
));

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
            element,
            fullWidth,
            outlined,
            box,
            dense,
            disabled,
            multiline,
            label,
            leadingIcon,
            trailingIcon,
            helperText,
            validationMessage,
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
                        'mdc-text-field--box': box && !fullWidth,
                        'mdc-text-field--dense': dense,
                        'mdc-text-field--disabled': disabled,
                        'mdc-text-field--outlined': outlined && !fullWidth,
                        'mdc-text-field--focused': focused,
                        'mdc-text-field--fullwidth': fullWidth,
                        'mdc-text-field--textarea': multiline,
                        'mdc-text-field--with-leading-icon': leadingIcon,
                        'mdc-text-field--with-trailing-icon': trailingIcon,
                        'mdc-text-field--invalid': !this.isValid,
                    }, 'mdc-text-field--upgraded', className)
                },
                    leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-text-field__icon',
                        tabIndex: '0',
                        role: 'button'
                    }),

                    React.createElement(multiline ? 'textarea' : 'input', {
                        className: 'mdc-text-field__input',
                        disabled,
                        ref: element => this.input = element,
                        onChange: this.handleInputChange,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onMouseDown: this.handleInputInteraction,
                        onTouchStart: this.handleInputInteraction,
                        ...props
                    }),
                    
                    (label && !fullWidth) &&
                        <FloatingLabel
                            float={!!focused || !!this.props.value || !this.isValid}
                        >
                            {label}
                        </FloatingLabel>,
                    
                    trailingIcon && React.cloneElement(trailingIcon, {
                        className: 'mdc-text-field__icon',
                        tabIndex: '0',
                        role: 'button'
                    }),
        
                    (!fullWidth && !multiline) &&
                        <LineRipple
                            active={focused}
                            center={this.lineRippleTransformOrigin}
                        />
                )}

                {(validationMessage && !valid) && <HelperText error>{this.validationMessage}</HelperText>}

                {helperText && <HelperText>{helperText}</HelperText>}
            </React.Fragment>
        );
    }
}