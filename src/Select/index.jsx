import React from 'react';
import classnames from 'classnames';

import LineRipple from '../LineRipple';
import FloatingLabel from '../FloatingLabel';
import { Menu, MenuItem } from '../Menu';
import HelperText from './HelperText';

import './index.scss';

Option.displayName = 'MDCOption';

export function Option(props) {
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
        focused: false,
        selectedText: ''
    };

    handleMenuClose = () => this.setState({ focused: false });

    handleSelectClick = event => {
        this.setState({ focused: true });
        
        const targetClientRect = event.target.getBoundingClientRect();
        const coords = { x: event.clientX, y: event.clientY };
        
        this.lineRippleTransformOrigin = coords.x - targetClientRect.left;
    };

    handleOptionClick = (value, selectedText, event) => {
        event.stopPropagation();
        this.props.onChange(value, event);
        this.setState({ selectedText, focused: false });
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
                    <input type="hidden" name={name} value={value} />

                    {leadingIcon && React.cloneElement(leadingIcon, {
                        className: 'mdc-select__icon',
                        tabIndex: '0',
                        role: 'button'
                    })}
        
                    <i className="mdc-select__dropdown-icon" />

                    <div className="mdc-select__selected-text">{selectedText}</div>

                    <Menu
                        className="mdc-select__menu"
                        open={focused}
                        anchor={this.rootElement}
                        onClose={this.handleMenuClose}
                    >
                        {React.Children.map(children, (option, index) =>
                            React.cloneElement(option, {
                                value: undefined,
                                selected: option.props.value === value,
                                onClick: event => this.handleOptionClick(option.props.value, option.props.children, event)
                            })
                        )}
                    </Menu>

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

                {helperText &&
                    <HelperText {...helperTextProps}>{helperText}</HelperText>
                }
            </React.Fragment>
        );
    }
}