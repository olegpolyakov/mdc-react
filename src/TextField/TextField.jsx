import React, { forwardRef, useRef, useState, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import NotchedOutline from '../NotchedOutline';
import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import HelperText from './HelperText';

export default forwardRef(TextField);

function TextField({
    value,
    defaultValue,
    label,
    leadingIcon,
    trailingIcon,
    prefix,
    suffix,
    helperText,
    validationMessage,
    filled = false,
    outlined = false,
    fullWidth = false,
    disabled = false,
    textarea = false,
    endAligned = false,

    className,
    element: Element = 'label',
    onChange = Function.prototype,
    ...props
}, ref) {
    const inputRef = useRef();
    const floatingLabelRef = useRef();
    const lineRippleRef = useRef();

    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);

    const handleInputInteraction = useCallback(event => {
        if (lineRippleRef.current) {
            const targetClientRect = event.target.getBoundingClientRect();
            const coords = { x: event.clientX, y: event.clientY };
            const transformOriginX = coords.x - targetClientRect.left;

            lineRippleRef.current.style.transformOrigin = `${transformOriginX}px center`;
        }
    }, []);

    const handleInputFocus = useCallback(() => {
        setFocused(true);
        setTouched(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setFocused(false);
    }, []);

    const handleInputChange = useCallback(event => {
        onChange(event, inputRef.current.value);
    }, []);

    const Input = textarea ? 'textarea' : 'input';

    const focusedOrHasValue = (
        focused ||
        (value !== undefined && value !== null && value !== '') ||
        (defaultValue !== undefined && defaultValue !== null && defaultValue !== '') ||
        Boolean(inputRef.current?.value)
    );

    const isValid = inputRef.current ? inputRef.current.validity.valid : true;

    const classNames = classnames('mdc-text-field', {
        'mdc-text-field--filled': filled && !fullWidth,
        'mdc-text-field--outlined': outlined && !fullWidth,
        'mdc-text-field--textarea': textarea,
        'mdc-text-field--disabled': disabled,
        'mdc-text-field--focused': focused,
        'mdc-text-field--invalid': !isValid && touched,
        'mdc-text-field--label-floating': focusedOrHasValue,
        'mdc-text-field--no-label': !label,
        'mdc-text-field--with-leading-icon': leadingIcon,
        'mdc-text-field--with-trailing-icon': trailingIcon,
        'mdc-text-field--end-aligned': endAligned,
    }, className);

    return (
        <React.Fragment>
            <Element
                ref={ref}
                className={classNames}
                onMouseDown={handleInputInteraction}
                onTouchStart={handleInputInteraction}
            >
                {filled &&
                    <span className="mdc-text-field__ripple" />
                }

                {outlined &&
                    <NotchedOutline
                        notched={focusedOrHasValue}
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

                {(label && !outlined) &&
                    <FloatingLabel
                        float={focusedOrHasValue}
                    >
                        {label}
                    </FloatingLabel>
                }

                {leadingIcon && React.cloneElement(leadingIcon, {
                    className: classnames('mdc-text-field__icon mdc-text-field__icon--leading', leadingIcon.props.className),
                    tabIndex: '0',
                    role: 'button'
                })}

                {prefix &&
                    <span className="mdc-text-field__affix mdc-text-field__affix--prefix">{prefix}</span>
                }

                <Input
                    className="mdc-text-field__input"
                    ref={inputRef}
                    value={value}
                    defaultValue={defaultValue}
                    disabled={disabled}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    {...props}
                />

                {suffix &&
                    <span className="mdc-text-field__affix mdc-text-field__affix--suffix">{suffix}</span>
                }

                {trailingIcon && React.cloneElement(trailingIcon, {
                    className: classnames('mdc-text-field__icon mdc-text-field__icon--trailing', trailingIcon.props.className),
                    tabIndex: '0',
                    role: 'button'
                })}

                {!outlined &&
                    <LineRipple
                        ref={lineRippleRef}
                        active={focused}
                    />
                }
            </Element>

            {helperText &&
                <HelperText persistent>{helperText}</HelperText>
            }

            {(!isValid && validationMessage) &&
                <HelperText validation>{getValidationMessage(inputRef.current, validationMessage)}</HelperText>
            }
        </React.Fragment>
    );
}

TextField.displayName = 'MDCTextField';

TextField.propTypes = {
    value: PropTypes.any,
    label: PropTypes.string,
    leadingIcon: PropTypes.element,
    trailingIcon: PropTypes.element,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    outline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    textarea: PropTypes.bool,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    helperText: PropTypes.string,
    validationMessage: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

function getValidationMessage(input, validationMessage) {
    if (typeof validationMessage === 'string') {
        return validationMessage;
    } else if (validationMessage === true) {
        return input ? input.validationMessage : undefined;
    }
}