import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import NotchedOutline from '../NotchedOutline/NotchedOutline';
import LineRipple from '../LineRipple/LineRipple';
import FloatingLabel from '../FloatingLabel/FloatingLabel';
import Menu from '../Menu/Menu';
import MenuSurface from '../MenuSurface/MenuSurface';
import DropdownIcon from './DropdownIcon';
import SelectOption from './SelectOption';
import HelperText from './HelperText';

export default function Select({
    value,
    options,
    label,
    leadingIcon,
    helperText,
    helperTextProps = {},
    filled = false,
    outlined = false,
    disabled = false,
    required = false,
    onChange = Function.prototype,

    className,
    children,
    ...props
}) {
    const anchorElement = useRef();
    const inputElement = useRef();
    const lineRippleTransformOrigin = useRef();

    const [activated, setActivated] = useState(false);
    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [selectedText, setSelectedText] = useState();

    useEffect(() => {
        const selectedOption = (options || React.Children.toArray(children).map(option => option.props))
            .find(option => option.value === value || option.selected);

        if (selectedOption) {
            setSelectedText(selectedOption.text || selectedOption.children);
        }
    }, [value]);

    const handleAnchorClick = useCallback(event => {
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };

        lineRippleTransformOrigin.current = coords.x - targetClientRect.left;

        setActivated(true);
        setFocused(true);
    }, []);

    const handleOptionClick = useCallback((event, option) => {
        event.stopPropagation();

        if (option.disabled) return;

        onChange(event, option.value);

        setActivated(false);
        setFocused(false);
        setTouched(true);
    }, []);

    const handleMenuClose = useCallback(() => {
        setActivated(false);
        setFocused(false);
    }, []);

    const classNames = classnames('mdc-select', {
        'mdc-select--filled': filled,
        'mdc-select--outlined': outlined,
        'mdc-select--activated': activated,
        'mdc-select--disabled': disabled,
        'mdc-select--focused': focused,
        'mdc-select--required': required,
        'mdc-select--invalid': touched && (required && !value),
        'mdc-select--no-label': !label,
        'mdc-select--with-leading-icon': leadingIcon
    }, className);

    const focusedOrHasValue = focused || Boolean(value);

    return (
        <React.Fragment>
            <div className={classNames}>
                <div
                    ref={anchorElement}
                    className="mdc-select__anchor"
                    onClick={handleAnchorClick}
                >
                    <input
                        ref={inputElement}
                        type="hidden"
                        value={value}
                        required={required}
                        disabled={disabled}
                        {...props}
                    />

                    {!outlined &&
                        <span className="mdc-select__ripple"></span>
                    }

                    {leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-select__icon',
                        tabIndex: '0',
                        role: 'button'
                    })}

                    <div className="mdc-select__selected-text">{selectedText}</div>

                    <DropdownIcon />

                    {outlined ?
                        <NotchedOutline notched={focusedOrHasValue}>
                            {label &&
                                <FloatingLabel float={focusedOrHasValue}>
                                    {label}
                                </FloatingLabel>
                            }
                        </NotchedOutline>
                        :
                        <>
                            {label &&
                                <FloatingLabel float={focusedOrHasValue}>
                                    {label}
                                </FloatingLabel>
                            }

                            <LineRipple
                                active={focused}
                                center={lineRippleTransformOrigin.current}
                            />
                        </>
                    }
                </div>

                <MenuSurface
                    open={focused}
                    anchor={anchorElement.current}
                    belowAnchor
                    onClose={handleMenuClose}
                >
                    <Menu className="mdc-select__menu">
                        {options ?
                            options.map(option =>
                                <SelectOption
                                    selected={option.selected || option.value === value}
                                    onClick={event => handleOptionClick(event, option)}
                                    {...option}
                                >
                                    {option.text}
                                </SelectOption>
                            )
                            :
                            React.Children.map(children, option =>
                                React.cloneElement(option, {
                                    value: undefined,
                                    selected: option.props.selected || option.props.value === value,
                                    onClick: event => handleOptionClick(event, option.props)
                                })
                            )}
                    </Menu>
                </MenuSurface>
            </div>

            {helperText &&
                <HelperText {...helperTextProps}>{helperText}</HelperText>
            }
        </React.Fragment>
    );
}

Select.displayName = 'MDCSelect';

Select.propTypes = {
    value: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    leadingIcon: PropTypes.element,
    helperText: PropTypes.string,
    helperTextProps: PropTypes.object,
    filled: PropTypes.bool,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    onChange: PropTypes.func
};