import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';
import NotchedOutline from '../NotchedOutline';
import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import { Menu } from '../Menu';
import MenuSurface from '../MenuSurface';
import HelperText from './HelperText';

export default function Select({
    value = '',
    outlined = false,
    disabled = false,
    required = false,
    label,
    leadingIcon,
    helperText,
    helperTextProps = {},
    onChange = Function.prototype,

    className,
    children,
    ...props
}) {
    const anchorElement = React.useRef();
    const inputElement = React.useRef();
    const floatingLabel = React.useRef();
    const options = React.useRef();
    const lineRippleTransformOrigin = React.useRef();

    const [activated, setActivated] = React.useState(false);
    const [focused, setFocused] = React.useState(false);
    const [touched, setTouched] = React.useState(false);

    const classNames = classnames('mdc-select', {
        'mdc-select--activated': activated,
        'mdc-select--disabled': disabled,
        'mdc-select--focused': focused,
        'mdc-select--outlined': outlined,
        'mdc-select--required': required,
        'mdc-select--invalid': touched && (required && !value),
        'mdc-select--no-label': !label,
        'mdc-select--with-leading-icon': leadingIcon
    }, className);

    const selectedText = options.current && options.current.get(value);
    const focusedOrHasValue = focused || value ? true : false;
    const notchedOutlineWidth = getNotchedOutlineWidth();

    function getOptions() {
        const options = React.Children.toArray(children).map(child =>[
            child.props.value,
            child.props.text || child.props.children
        ]);

        return new Map(options);
    }

    function getNotchedOutlineWidth() {
        if (!floatingLabel.current) return;

        const width = floatingLabel.current.width;
        const labelScale = 0.75;

        return width * labelScale;
    }

    function handleMenuClose() {
        setActivated(false);
        setFocused(false);
    }

    function handleSelectClick(event) {
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        lineRippleTransformOrigin.current = coords.x - targetClientRect.left;

        setActivated(true);
        setFocused(true);
    }

    function handleOptionClick(value, event) {
        event.stopPropagation();

        onChange(value, inputElement.current);

        setActivated(false);
        setFocused(false);
        setTouched(true);
    }

    useMounted(() => {
        options.current = getOptions();
    });

    useUpdated(() => {
        options.current = getOptions();
    }, [value]);

    return (
        <React.Fragment>
            <div className={classNames}>
                <div
                    className="mdc-select__anchor"
                    ref={anchorElement}
                    onClick={handleSelectClick}
                >
                    <input
                        type="hidden"
                        ref={inputElement}
                        value={value}
                        required={required}
                        disabled={disabled}
                        {...props}
                    />

                    {leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-select__icon',
                        tabIndex: '0',
                        role: 'button'
                    })}
        
                    <i className="mdc-select__dropdown-icon" />

                    <div className="mdc-select__selected-text">{selectedText}</div>

                    {outlined ?
                        <NotchedOutline
                            notched={focusedOrHasValue}
                            width={notchedOutlineWidth}
                        >
                            {label &&
                                <FloatingLabel
                                    ref={floatingLabel}
                                    float={focusedOrHasValue}
                                >
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
                        {React.Children.map(children, (option, index) =>
                            React.cloneElement(option, {
                                value: undefined,
                                selected: option.props.value === value,
                                onClick: option.props.disabled ? undefined : event => handleOptionClick(option.props.value, event)
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
    value: PropTypes.string.isRequired,
    outlined: PropTypes.bool,
    disabled: PropTypes.bool,
    helperTextProps: PropTypes.object,
    onChange: PropTypes.func
};