import React from 'react';
import classnames from 'classnames';

export default class TextField extends React.Component {
    static defaultProps = {
        type: 'text',
        onChange: Function.prototype
    };

    handleTextareaKeyPress = event => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();

            this.props.onEnter(this.textarea.value);
            this.textarea.value = '';

            return false;
        }
    }

    handleContentEditableKeyPress = event => {
        if (event.which === 13 && !event.shiftKey) {
            event.preventDefault();

            this.props.onEnter(this.contentEditable.textContent);
            this.contentEditable.textContent = '';

            return false;
        }
    }

    render() {
        const {
            id,
            type,
            value,
            defaultValue,
            fullWidth,
            outlined,
            box,
            dense,
            focused,
            disabled,
            multiline,
            contentEditable,
            label,
            leadingIcon,
            trailingIcon,
            className,
            children,
            onChange,
            ...props
        } = this.props;

        const classNames = classnames('mdc-text-field', {
            'mdc-text-field--box': box && !fullWidth,
            'mdc-text-field--dense': dense,
            'mdc-text-field--disabled': disabled,
            'mdc-text-field--outlined': outlined && !fullWidth,
            'mdc-text-field--focused': focused,
            'mdc-text-field--fullwidth': fullWidth,
            'mdc-text-field--with-leading-icon': leadingIcon,
            'mdc-text-field--with-trailing-icon': trailingIcon
        })

        if (multiline) {
            return (
                <div className={classnames(classNames, 'mdc-text-field--textarea')}>
                    <textarea
                        id={id}
                        className="mdc-text-field__input"
                        rows="8"
                        cols="40"
                        ref={textarea => this.textarea = textarea}
                        onKeyPress={this.handleTextareaKeyPress}
                        {...props}
                    />

                    <label htmlFor={id} className="mdc-text-field__label">{label}</label>
                </div>
            );
        }

        return (
            <div className={classNames}>
                {leadingIcon && React.cloneElement(leadingIcon, {
                    className: 'mdc-text-field__icon',
                    tabIndex: '0',
                    role: 'button'
                })}

                {contentEditable ?
                    <div
                        id={id}
                        className="mdc-text-field__input"
                        contentEditable
                        ref={input => this.contentEditable = input}
                        onKeyPress={this.handleContentEditableKeyPress}
                    />
                    :
                    <input
                        id={id}
                        className="mdc-text-field__input"
                        type={type}
                        ref={input => this.input = input}
                        value={value}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        onChange={onChange}
                    />
                }
                
                {!fullWidth && <label className="mdc-text-field__label" htmlFor={id}>{label}</label>}
                
                {trailingIcon && React.cloneElement(trailingIcon, {
                    className: 'mdc-text-field__icon',
                    tabIndex: '0',
                    role: 'button'
                })}

                <div className="mdc-text-field__bottom-line"></div>
            </div>
        );
    }
}