import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Switch);

function Switch({
    checked = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) {
    const inputRef = useRef();

    const handleChange = useCallback(event => {
        onChange(event, event.target.checked, event.target);
    }, []);

    const classNames = classnames('mdc-switch', {
        'mdc-switch--checked': checked,
        'mdc-switch--disabled': disabled
    }, className);

    return (
        <div ref={ref} className={classNames}>
            <div className="mdc-switch__track" />

            <div className="mdc-switch__thumb-underlay">
                <div className="mdc-switch__thumb" />

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
    );
}

Switch.displayName = 'MDCSwitch';

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};