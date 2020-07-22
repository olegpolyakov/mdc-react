import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import NotchedOutline from '../NotchedOutline/NotchedOutline';
import LineRipple from '../LineRipple/LineRipple';
import FloatingLabel from '../FloatingLabel/FloatingLabel';
import Menu from '../Menu/Menu';
import DropdownIcon from './DropdownIcon';
import SelectOption from './SelectOption';
import HelperText from './HelperText';

export default function Select({
    value,
    name,
    options,
    label,
    leadingIcon,
    helperText,
    filled = false,
    outlined = false,
    multiple = false,
    disabled = false,
    required = false,
    onChange = Function.prototype,
    menuProps = {},
    helperTextProps = {},

    className,
    children,
    ...props
}) {
    const anchorElement = useRef();
    const inputElement = useRef();
    const lineRippleRef = useRef();

    const [activated, setActivated] = useState(false);
    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [selectedText, setSelectedText] = useState();

    useEffect(() => {
        if (multiple) {
            const selectedOptions = (options || React.Children.toArray(children).map(option => option.props))
                .filter(option => value.includes(option.value));

            const selectedText = selectedOptions.map(option => option.text || option.children).join(', ');
            setSelectedText(selectedText);
        } else {
            const selectedOption = (options || React.Children.toArray(children).map(option => option.props))
                .find(option => option.value === value);

            if (selectedOption) {
                setSelectedText(selectedOption.text || selectedOption.children);
            }
        }
    }, [value, multiple]);

    const handleAnchorClick = useCallback(event => {
        if (activated) {
            setActivated(false);
            setFocused(false);
        } else {
            if (lineRippleRef.current) {
                const targetClientRect = event.target.getBoundingClientRect();
                const coords = { x: event.clientX, y: event.clientY };
                const transformOriginX = coords.x - targetClientRect.left;

                lineRippleRef.current.style.transformOrigin = `${transformOriginX}px center`;
            }

            setActivated(true);
            setFocused(true);
        }
    }, [activated]);

    const handleOptionClick = useCallback((event, option) => {
        event.stopPropagation();

        if (option.disabled) return;

        if (multiple) {
            const values = new Set(value);

            values.has(option.value) ?
                values.delete(option.value) :
                values.add(option.value);

            event.target = { name, value: [...values] };

            onChange(event, [...values]);
        } else {
            event.target = { name, value: option.value };

            onChange(event, option.value);

            setActivated(false);
            setFocused(false);
        }

        setTouched(true);
    }, [value, multiple]);

    const handleMenuClose = useCallback(event => {
        if (event.target.classList.contains('mdc-select__anchor')) return;
        if (multiple && event.target.classList.contains('mdc-menu-item')) return;

        setActivated(false);
        setFocused(false);
    }, [multiple]);

    const handleKeyDown = useCallback(event => {
        event.stopPropagation();

        if (
            event.key === ' ' ||
            event.key === 'Enter' ||
            event.key === 'ArrowDown' ||
            event.key === 'ArrowUp'
        ) {
            event.preventDefault();
            setActivated(true);
        } else if (event.key === 'Escape') {
            event.preventDefault();
            setActivated(false);
        }
    }, []);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(event => {
        if (event.relatedTarget?.classList.contains('mdc-menu')) return;

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

    const focusedOrHasValue = focused || (Array.isArray(value) ? value.length > 0 : Boolean(value));

    return (
        <React.Fragment>
            <div className={classNames}>
                <div
                    ref={anchorElement}
                    className="mdc-select__anchor"
                    tabIndex={!disabled ? 0 : undefined}
                    onFocus={handleFocus}
                    //onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onClick={handleAnchorClick}
                >
                    <input
                        ref={inputElement}
                        type="hidden"
                        name={name}
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
                                ref={lineRippleRef}
                                active={focused}
                            />
                        </>
                    }
                </div>

                <Menu
                    className="mdc-select__menu"
                    open={activated}
                    anchor={anchorElement.current}
                    belowAnchor
                    onClose={handleMenuClose}
                    {...menuProps}
                >
                    {options ?
                        options.map(option =>
                            <SelectOption
                                {...option}
                                value={undefined}
                                data-value={option.value}
                                selected={multiple ? value.includes(option.value) : option.value === value}
                                onClick={event => handleOptionClick(event, option)}
                            />
                        )
                        :
                        React.Children.map(children, option =>
                            React.cloneElement(option, {
                                value: undefined,
                                'data-value': option.props.value,
                                selected: multiple ? value.includes(option.props.value) : option.props.value === value,
                                onClick: event => handleOptionClick(event, option.props)
                            })
                        )}
                </Menu>
            </div>

            {helperText &&
                <HelperText {...helperTextProps}>{helperText}</HelperText>
            }
        </React.Fragment>
    );
}

Select.displayName = 'MDCSelect';

Select.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    options: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
    leadingIcon: PropTypes.element,
    helperText: PropTypes.string,
    filled: PropTypes.bool,
    outlined: PropTypes.bool,
    multiple: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    menuProps: PropTypes.object,
    helperTextProps: PropTypes.object,
    onChange: PropTypes.func
};