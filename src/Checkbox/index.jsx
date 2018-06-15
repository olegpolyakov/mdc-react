import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Checkbox extends React.Component {
    static defaultProps = {
        checked: false,
        indeterminate: false,
        disabled: false,
        onChange: Function.prototype
    };

    input = React.createRef();

    handleChange = event => this.props.onChange(event, !this.props.checked);

    componentDidUpdate() {
        this.input.current.blur();
    }

    render() {
        const { id, name, checked, indeterminate, disabled, className, onChange, ...props } = this.props;

        const classNames = classnames('mdc-checkbox', {
            'mdc-checkbox--checked': checked,
            'mdc-checkbox--indeterminate': indeterminate,
            'mdc-checkbox--disabled': disabled
        }, className);

        return (
            <div className={classNames}>
                <input
                    id={id}
                    ref={this.input}
                    name={name}
                    type="checkbox"
                    className="mdc-checkbox__native-control"
                    checked={checked}
                    disabled={disabled}
                    onChange={this.handleChange}
                />

                <div className="mdc-checkbox__background">
                    <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark-path"
                            fill="none"
                            stroke="white"
                            d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                    </svg>

                    <div className="mdc-checkbox__mixedmark"></div>
                </div>
            </div>
        );
    }
}