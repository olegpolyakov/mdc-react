import React from 'react';
import classnames from 'classnames';

import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import HelperText from './HelperText';

import './index.scss';

export function Option(props) {
    return <option {...props} />;
}

export class Select extends React.Component {
    static defaultProps = {
        disabled: false,
        outlined: false,
        helperTextProps: {},

        onChange: Function.prototype
    };

    state = {
        focused: false
    };

    get isValid() {
        return this.select ? this.select.checkValidity() : true;
    }

    handleChange = event => this.props.onChange(event.target.value, event);

    handleInteraction = event => {
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        this.lineRippleTransformOrigin = coords.x - targetClientRect.left;
    };

    handleFocus = event => this.setState({ focused: true });

    handleBlur = event => {
        this.lineRippleTransformOrigin = undefined;
        this.setState({ focused: false });
    }

    render() {
        const { value, disabled, outlined, required, label, leadingIcon, helperText, helperTextProps, className, children, ...props } = this.props;
        const { focused } = this.state;
        
        const classNames = classnames('mdc-select', {
            'mdc-select--outlined': outlined,
            'mdc-select--required': required,
            'mdc-select--disabled': disabled,
            'mdc-select--focused': focused,
            'mdc-select--invalid': !this.isValid,
            'mdc-select--with-leading-icon': leadingIcon
        }, className);
        
        return (
            <React.Fragment>
                <div
                    className={classNames}
                    onMouseDown={this.handleInteraction}
                    onTouchStart={this.handleInteraction}
                >
                    {leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-select__icon',
                        tabIndex: '0',
                        role: 'button'
                    })}

                    <i className="mdc-select__dropdown-icon"></i>
        
                    <select
                        ref={element => this.select = element}
                        className="mdc-select__native-control"
                        value={value}
                        required={required}
                        disabled={disabled}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    >
                        <Option value="" disabled />
                        {children}
                    </select>

                    {label &&
                        <FloatingLabel float={focused || value !== ''}>
                            {label}
                        </FloatingLabel>
                    }

                    {!outlined &&
                        <LineRipple
                            active={focused}
                            center={this.lineRippleTransformOrigin}
                        />
                    }
                </div>

                {helperText && <HelperText {...helperTextProps}>{helperText}</HelperText>}
            </React.Fragment>
        );
    }
}