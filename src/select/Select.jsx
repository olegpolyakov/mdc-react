import { useRef, useState, useEffect, useCallback, Children, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { isUndefined, isArray } from '../types';
import { Clone, create, clone } from '../component';
import FloatingLabel from '../floating-label';
import Icon from '../icon';
import LineRipple from '../line-ripple';
import NotchedOutline from '../notched-outline';
import Menu, { MenuOrigin } from '../menu';

import { cssClasses } from './constants';
import DropdownIcon from './DropdownIcon';
import SelectOption from './SelectOption';
import HelperText from './HelperText';

const Select = forwardRef(({
    name,
    value,
    options,
    label,
    icon,
    leadingIcon = icon,
    helperText,
    filled = false,
    outlined = false,
    multiple = isArray(value),
    disabled = false,
    required = false,
    onChange = Function.prototype,
    menuProps = {},
    listProps = {},
    helperTextProps = {},

    className,
    children = options?.map(option => create(SelectOption, option)),
    ...props
}, ref) => {
    const anchorRef = useRef();
    const inputRef = useRef();
    const menuRef = useRef();

    const [activated, setActivated] = useState(false);
    const [focused, setFocused] = useState(false);
    const [touched, setTouched] = useState(false);
    const [selectedText, setSelectedText] = useState();
    const [interactionCoords, setInteractionCoords] = useState();

    useEffect(() => {
        if (multiple) {
            const selectedOptions = (Children.toArray(children).map(option => option.props))
                .filter(option => value.includes(option.value));

            const selectedText = selectedOptions.map(option => option.text || option.children).join(', ');
            setSelectedText(selectedText);
        } else {
            const selectedOption = (Children.toArray(children).map(option => option.props))
                .find(option => option.value === value);

            if (selectedOption) {
                setSelectedText(selectedOption.text || selectedOption.children);
            }
        }
    }, [value, multiple, children]);

    const handleAnchorClick = useCallback(event => {
        if (activated) {
            setActivated(false);
            setFocused(false);
        } else {
            const targetClientRect = event.target.getBoundingClientRect();

            setInteractionCoords({
                x: event.clientX - targetClientRect.left,
                y: event.clientY - targetClientRect.top
            });

            setActivated(true);
            setFocused(true);
        }
    }, [activated]);

    const handleOptionInteraction = useCallback(event => {
        if (
            event.type === 'keydown' &&
            event.key !== ' ' &&
            event.key !== 'Enter'
        ) return;

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
            event.stopPropagation();

            setActivated(true);
        }
    }, []);

    const hasValue = isArray(value) ? value.length > 0 : Boolean(value);
    const focusedOrHasValue = focused || hasValue;
    const isInvalid = touched && required && !hasValue;

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FILLED]: filled,
        [cssClasses.OUTLINED]: outlined,
        [cssClasses.ACTIVATED]: activated,
        [cssClasses.DISABLED]: disabled,
        [cssClasses.FOCUSED]: focused,
        [cssClasses.REQUIRED]: required,
        [cssClasses.INVALID]: isInvalid,
        [cssClasses.NO_LABEL]: !label,
        [cssClasses.WITH_LEADING_ICON]: leadingIcon
    }, className);

    return (<>
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
                className={cssClasses.ANCHOR}
                aria-required={required || undefined}
                tabIndex={!disabled ? 0 : undefined}
                onKeyDown={handleKeyDown}
                onClick={handleAnchorClick}
            >
                {filled &&
                    <div className={cssClasses.RIPPLE} />
                }

                {filled && label &&
                    <FloatingLabel
                        label={label}
                        float={focusedOrHasValue}
                    />
                }

                {outlined &&
                    <NotchedOutline notched={focusedOrHasValue}>
                        {label &&
                            <FloatingLabel
                                label={label}
                                float={focusedOrHasValue}
                            />
                        }
                    </NotchedOutline>
                }

                {leadingIcon &&
                    <Clone
                        component={leadingIcon}
                        fallback={Icon}
                        className={cssClasses.ICON}
                        tabIndex="0"
                        role="button"
                    />
                }

                <span className={cssClasses.SELECTED_TEXT_CONTAINER}>
                    <span className={cssClasses.SELECTED_TEXT}>{selectedText}</span>
                </span>

                <DropdownIcon />

                {filled &&
                    <LineRipple
                        active={focused}
                        transformOrigin={interactionCoords?.x}
                    />
                }
            </div>

            <Menu
                ref={menuRef}
                anchorRef={anchorRef}
                className={cssClasses.MENU}
                open={activated}
                anchorOrigin={MenuOrigin.BOTTOM_CENTER}
                transformOrigin={MenuOrigin.TOP_CENTER}
                fullWidth
                listProps={listProps}
                onClose={handleMenuClose}
                {...menuProps}
            >
                {Children.map(children, option => {
                    const optionValue = option.props.value;

                    return clone(option, {
                        value: undefined,
                        'data-value': optionValue,
                        selected: !isUndefined(value) && (multiple ? value.includes(optionValue) : optionValue === value),
                        checkbox: multiple,
                        onClick: handleOptionInteraction,
                        onKeyDown: handleOptionInteraction
                    });
                })}
            </Menu>
        </div>

        {helperText &&
            <HelperText {...helperTextProps}>{helperText}</HelperText>
        }
    </>);
});

Select.displayName = 'MDCSelect';

Select.propTypes = {
    value: PropTypes.any,
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

export default Select;