import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Switch({
    checked = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}) {
    const inputRef = useRef();

    const handleChange = useCallback(event => {
        onChange(event, event.target.checked, event.target);
    }, []);

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
                        ref={inputRef}
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