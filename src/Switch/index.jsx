import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Switch extends React.Component {
    static displayName = 'MDCSwitch';

    static defaultProps = {
        checked: false,
        disabled: false,
        
        onChange: Function.prototype
    };

    handleChange = event => this.props.onChange(!this.props.checked, event);

    render() {
        const { checked, disabled, onChange, className, ...props } = this.props;

        const classNames = classnames('mdc-switch', {
            'mdc-switch--checked': checked,
            'mdc-switch--disabled': disabled
        }, className);

        return (
            <div className={classNames}>
                <div className="mdc-switch__track" />
                <div className="mdc-switch__thumb-underlay">
                    <div className="mdc-switch__thumb">
                        <input
                            className="mdc-switch__native-control"
                            type="checkbox"
                            role="switch"
                            checked={checked}
                            disabled={disabled}
                            onChange={this.handleChange}
                            {...props}
                        />
                    </div>
                </div>
            </div>
        );
    }
}