import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Switch({
    checked = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}) {
    const inputElement = React.useRef();

    const classNames = classnames('mdc-switch', {
        'mdc-switch--checked': checked,
        'mdc-switch--disabled': disabled
    }, className);

    const handleChange = event => onChange(!checked, inputElement.current, event);

    return (
        <div className={classNames}>
            <div className="mdc-switch__track" />

            <div className="mdc-switch__thumb-underlay">
                <div className="mdc-switch__thumb">
                    <input
                        ref={inputElement}
                        className="mdc-switch__native-control"
                        type="checkbox"
                        role="switch"
                        checked={checked}
                        disabled={disabled}
                        onChange={handleChange}
                        {...props}
                    />
                </div>
            </div>
        </div>
    );
}

Switch.displayName = 'MDCSwitch';

Switch.propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};