import React from 'react';

export default function NativeSelect() {
    return (
        <select
            ref={element => this.select = element}
            className="mdc-select__native-control"
            value={value}
            required={required}
            disabled={disabled}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
        >
            <Option value="" disabled />
            {children}
        </select>
    );
};