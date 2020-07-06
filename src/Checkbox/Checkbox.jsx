import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Checkbox({
    checked = false,
    indeterminate = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const handleChange = useCallback(event => {
        onChange(event, event.target.checked, event.target);
    }, []);

    const classNames = classnames('mdc-checkbox', {
        'mdc-checkbox--disabled': disabled
    }, className);

    return (
        <div className={classNames}>
            <input
                ref={inputRef}
                type="checkbox"
                className="mdc-checkbox__native-control"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />

            <div className="mdc-checkbox__background">
                <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                    <path className="mdc-checkbox__checkmark-path" fill="none" stroke="white" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                </svg>

                <div className="mdc-checkbox__mixedmark" />
            </div>

            <div className="mdc-checkbox__ripple" />
        </div>
    );
}

Checkbox.displayName = 'MDCCheckbox';

Checkbox.propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};