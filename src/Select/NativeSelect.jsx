import React from 'react';

Option.displayName = 'MDCOption';

export function Option(props) {
    return (
        <option {...props} />
    );
}

export default class Select extends React.Component {
    static displayName = 'MDCSelect';

    render() {
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
                {children}
            </select>
        );
    }
};