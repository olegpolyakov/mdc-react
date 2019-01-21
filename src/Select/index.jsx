import React from 'react';
import classnames from 'classnames';

import NotchedOutline from '../NotchedOutline';
import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import { Menu, MenuItem } from '../Menu';
import MenuSurface from '../MenuSurface';
import HelperText from './HelperText';

import './index.scss';

SelectOption.displayName = 'MDCSelectOption';

export function SelectOption(props) {
    return <MenuItem {...props} />;
}

export class Select extends React.Component {
    static displayName = 'MDCSelect';

    static defaultProps = {
        disabled: false,
        outlined: false,
        helperTextProps: {},

        onChange: Function.prototype
    };

    state = {
        selectedText: '',
        focused: false
    };

    get notchedOutlineWidth() {
        const width = (this.props.outlined && this.floatingLabel) ? this.floatingLabel.width : 0;
        const labelScale = 0.95;

        return width * labelScale;
    }

    setFloatingLabelRef = component => {
        this.floatingLabel = component;
        this.forceUpdate();
    };

    handleMenuClose = () => this.setState({ focused: false });

    handleSelectClick = event => {
        this.setState({ focused: true });
        
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        this.lineRippleTransformOrigin = coords.x - targetClientRect.left;
    };

    handleOptionClick = (value, text, event) => {
        event.stopPropagation();

        this.props.onChange(value, this.inputElement);
        this.setState({ selectedText: text, focused: false });
    };

    render() {
        const {
            name,
            value,
            outlined,
            required,
            disabled,
            label,
            leadingIcon,
            helperText,
            helperTextProps,
            
            className,
            children,
            ...props
        } = this.props;

        const { selectedText, focused } = this.state;
        
        const classNames = classnames('mdc-select', {
            'mdc-select--outlined': outlined,
            'mdc-select--required': required,
            'mdc-select--disabled': disabled,
            'mdc-select--focused': focused,
            'mdc-select--invalid': false,
            'mdc-select--with-leading-icon': leadingIcon
        }, className);
        
        return (
            <React.Fragment>
                <div
                    className={classNames}
                    ref={element => this.rootElement = element}
                    onClick={this.handleSelectClick}
                >
                    <input
                        type="hidden"
                        ref={element => this.inputElement = element}
                        name={name}
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

                    {outlined && label &&
                        <NotchedOutline
                            notched={focused || value}
                            width={this.notchedOutlineWidth}
                        >
                            <FloatingLabel
                                ref={this.setFloatingLabelRef}
                                float={focused || value}
                            >
                                {label}
                            </FloatingLabel>
                        </NotchedOutline>
                    }

                    <MenuSurface
                        open={focused}
                        anchor={this.rootElement}
                        onClose={this.handleMenuClose}
                    >
                        <Menu className="mdc-select__menu">
                            {React.Children.map(children, (option, index) =>
                                React.cloneElement(option, {
                                    value: undefined,
                                    selected: option.props.value === value,
                                    onClick: option.props.disabled ? undefined : event => this.handleOptionClick(option.props.value || index, option.props.text || option.props.children, event)
                                })
                            )}
                        </Menu>
                    </MenuSurface>

                    {!outlined && label &&
                        <FloatingLabel float={focused || value}>
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

                {helperText &&
                    <HelperText {...helperTextProps}>{helperText}</HelperText>
                }
            </React.Fragment>
        );
    }
}