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

export default React.forwardRef(Select);

function Select({
    name,
    value,
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
}, ref) {
    const anchorRef = useRef();
    const inputRef = useRef();
    const menuRef = useRef();
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
    }, [value, options, multiple, children]);

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

    const handleOptionInteraction = useCallback(event => {
        if (event.type === 'keydown' && event.key !== ' ' && event.key !== 'Enter') return;

        const option = event.currentTarget.dataset;

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
    }, [value, name, multiple, onChange]);

    const handleMenuClose = useCallback(event => {
        if (event.type === 'click' && event.target === anchorRef.current) return;
        if (multiple && event.type === 'click' && event.path.includes(menuRef.current)) return;

        setActivated(false);
        setFocused(false);
        setTouched(true);
    }, [multiple]);

    const handleKeyDown = useCallback(event => {
        if (
            event.key === ' ' ||
            event.key === 'Enter' ||
            event.key === 'ArrowDown' ||
            event.key === 'ArrowUp'
        ) {
            event.preventDefault();

            setActivated(true);
        }
    }, []);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const hasValue = (Array.isArray(value) ? value.length > 0 : Boolean(value));
    const focusedOrHasValue = focused || hasValue;

    const classNames = classnames('mdc-select', {
        'mdc-select--filled': filled,
        'mdc-select--outlined': outlined,
        'mdc-select--activated': activated,
        'mdc-select--disabled': disabled,
        'mdc-select--focused': focused,
        'mdc-select--required': required,
        'mdc-select--invalid': touched && (required && !hasValue),
        'mdc-select--no-label': !label,
        'mdc-select--with-leading-icon': leadingIcon
    }, className);

    return (
        <React.Fragment>
            <div ref={ref} className={classNames}>
                {name &&
                    <input
                        ref={inputRef}
                        type="hidden"
                        name={name}
                        value={value}
                        required={required}
                        disabled={disabled}
                        {...props}
                    />
                }

                <div
                    ref={anchorRef}
                    className="mdc-select__anchor"
                    aria-required={required || undefined}
                    tabIndex={!disabled ? 0 : undefined}
                    onFocus={handleFocus}
                    onKeyDown={handleKeyDown}
                    onClick={handleAnchorClick}
                >
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
                            <span className="mdc-select__ripple" />

                            {label &&
                                <FloatingLabel float={focusedOrHasValue}>
                                    {label}
                                </FloatingLabel>
                            }
                        </>
                    }

                    {leadingIcon && React.cloneElement(leadingIcon, {
                        className: classnames('mdc-select__icon', leadingIcon.props.className),
                        tabIndex: '0',
                        role: 'button'
                    })}

                    <span className="mdc-select__selected-text-container">
                        <span className="mdc-select__selected-text">{selectedText}</span>
                    </span>

                    <DropdownIcon />

                    {!outlined &&
                        <LineRipple
                            ref={lineRippleRef}
                            active={focused}
                        />
                    }
                </div>

                <Menu
                    ref={menuRef}
                    className="mdc-select__menu"
                    open={activated}
                    anchor={anchorRef.current}
                    belowAnchor
                    fullWidth
                    onClose={handleMenuClose}
                    {...menuProps}
                >
                    {options ?
                        options.map(option =>
                            <SelectOption
                                {...option}
                                key={option.key}
                                value={undefined}
                                data-value={option.value}
                                selected={multiple ? value.includes(option.value) : option.value === value}
                                checkbox={multiple}
                                onClick={handleOptionInteraction}
                                onKeyDown={handleOptionInteraction}
                            />
                        )
                        :
                        React.Children.map(children, option =>
                            React.cloneElement(option, {
                                value: undefined,
                                'data-value': option.props.value,
                                selected: multiple ? value.includes(option.props.value) : option.props.value === value,
                                checkbox: multiple,
                                onClick: handleOptionInteraction,
                                onKeyDown: handleOptionInteraction
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