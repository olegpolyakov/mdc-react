import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Radio({
    value,
    checked = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}) {
    const inputRef = useRef();

    const handleChange = useCallback(event => {
        onChange(event, event.target.value, event.target);
    }, []);

    const classNames = classnames('mdc-radio', {
        'mdc-radio--disabled': disabled
    }, className);

    return (
        <div className={classNames}>
            <input
                ref={inputRef}
                className="mdc-radio__native-control"
                type="radio"
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />

            <div className="mdc-radio__background">
                <div className="mdc-radio__outer-circle" />
                <div className="mdc-radio__inner-circle" />
            </div>

            <div className="mdc-radio__ripple" />
        </div>
    );
}

Radio.displayName = 'MDCRadio';

Radio.propTypes = {
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};