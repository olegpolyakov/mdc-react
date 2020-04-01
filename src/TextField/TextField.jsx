import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import NotchedOutline from '../NotchedOutline';
import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import HelperText from './HelperText';

export default function TextField({
    value,
    outlined = false,
    fullWidth = false,
    disabled = false,
    textarea = false,
    endAligned = false,
    label,
    leadingIcon,
    trailingIcon,
    helperText,
    validationMessage,

    className,
    element: Element = 'div',
    onChange,
    ...props
}) {
    const inputRef = React.useRef();
    const floatingLabelRef = React.useRef();
    const lineRippleTransformOrigin = React.useRef();

    const [focused, setFocused] = React.useState(false);
    const [touched, setTouched] = React.useState(false);

    const Input = textarea ? 'textarea' : 'input';
    const focusedOrHasValue = focused || (value !== undefined && value !== null && value !== '');
    const isValid = inputRef.current ? inputRef.current.validity.valid : true;
    const notchedOutlineWidth = getNotchedOutlineWidth();

    const classNames = classnames('mdc-text-field', {
        'mdc-text-field--outlined': outlined && !fullWidth,
        'mdc-text-field--fullwidth': fullWidth,
        'mdc-text-field--textarea': textarea,
        'mdc-text-field--disabled': disabled,
        'mdc-text-field--focused': focused,
        'mdc-text-field--invalid': !isValid && touched,
        'mdc-text-field--with-leading-icon': leadingIcon,
        'mdc-text-field--with-trailing-icon': trailingIcon,
        'mdc-text-field--no-label': !label,
        'mdc-text-field--end-aligned': endAligned,
    }, 'mdc-text-field--upgraded', className);

    function getValidationMessage() {
        if (typeof validationMessage === 'string') {
            return validationMessage;
        } else if (validationMessage === true) {
            return inputRef.current ? inputRef.current.validationMessage : undefined;
        }
    }

    function getNotchedOutlineWidth() {
        if (!floatingLabelRef.current) return;

        const width = floatingLabelRef.current.width;
        const labelScale = 0.75;

        return width * labelScale;
    }

    function handleInputInteraction(event) {
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        lineRippleTransformOrigin.current = coords.x - targetClientRect.left;
    }

    function handleInputFocus(event) {
        setFocused(true);
        setTouched(true);
    }

    function handleInputBlur(event) {
        lineRippleTransformOrigin.current = null;

        setFocused(false);
    }

    function handleInputChange(event)  {
        onChange(inputRef.current.value, inputRef.current, event);
    }
    
    return (
        <React.Fragment>
            <Element className={classNames}>
                {(!outlined && !textarea) &&
                    <span class="mdc-text-field__ripple" />
                }

                {leadingIcon && React.cloneElement(leadingIcon, {
                    className: 'mdc-text-field__icon mdc-text-field__icon--leading',
                    tabIndex: '0',
                    role: 'button'
                })}

                <Input
                    className="mdc-text-field__input"
                    ref={inputRef}
                    value={value}
                    placeholder={(fullWidth && !textarea) ? label : undefined}
                    disabled={disabled}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onMouseDown={handleInputInteraction}
                    onTouchStart={handleInputInteraction}
                    {...props}
                />

                {trailingIcon && React.cloneElement(trailingIcon, {
                    className: 'mdc-text-field__icon mdc-text-field__icon--trailing',
                    tabIndex: '0',
                    role: 'button'
                })}

                {(outlined || textarea) &&
                    <NotchedOutline
                        notched={focusedOrHasValue}
                        width={notchedOutlineWidth}
                    >
                        {label &&
                            <FloatingLabel
                                ref={floatingLabelRef}
                                float={focusedOrHasValue}
                            >
                                {label}
                            </FloatingLabel>
                        }
                    </NotchedOutline>
                }

                {(label && !outlined && !fullWidth && !textarea) &&
                    <FloatingLabel
                        float={focusedOrHasValue}
                    >
                        {label}
                    </FloatingLabel>
                }

                {(!outlined && !textarea) &&
                    <LineRipple
                        active={focused}
                        center={lineRippleTransformOrigin.current}
                    />
                }
            </Element>

            {helperText &&
                <HelperText persistent>{helperText}</HelperText>
            }

            {(!isValid && validationMessage) &&
                <HelperText validation>{getValidationMessage()}</HelperText>
            }
        </React.Fragment>
    );
}

TextField.displayName = 'MDCTextField';

TextField.propTypes = {
    value: PropTypes.any,
    outline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    textarea: PropTypes.bool,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    validationMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};