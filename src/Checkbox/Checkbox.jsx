import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useRendered } from '../lifecycle-hooks';

export default function Checkbox({
    checked = false,
    indeterminate = false,
    disabled = false,
    onChange = Function.prototype,
    
    className,
    ...props
}) {
    const input = React.useRef();

    const handleChange = event => onChange(!checked, input.current, event);

    const classNames = classnames('mdc-checkbox', {
        'mdc-checkbox--checked': checked,
        'mdc-checkbox--indeterminate': indeterminate,
        'mdc-checkbox--disabled': disabled
    }, className);

    useRendered(() => {
        input.current.blur();
    }, [checked]);

    return (
        <div className={classNames}>
            <input
                ref={input}
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

            <div className="mdc-checkbox__ripple"></div>
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