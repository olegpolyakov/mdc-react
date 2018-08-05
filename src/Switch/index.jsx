import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Switch extends React.Component {
    static defaultProps = {
        onChange: Function.prototype
    };

    input = React.createRef();

    componentDidUpdate() {
        this.input.current.blur();
    }

    handleChange = event => this.props.onChange(event, !this.props.checked);

    render() {
        const { checked, disabled, className, onChange, ...props } = this.props;

        const classNames = classnames('mdc-switch', className);

        return (
            <div className={classNames} {...props}>
                <input
                    type="checkbox"
                    className="mdc-switch__native-control"
                    role="switch"
                    ref={this.input}
                    checked={checked}
                    disabled={disabled}
                    onChange={this.handleChange}
                />

                <div className="mdc-switch__background">
                    <div className="mdc-switch__knob"></div>
                </div>
            </div>
        );
    }
}