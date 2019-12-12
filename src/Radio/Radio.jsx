import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useRendered } from '../lifecycle-hooks';

export default function Radio({
    value,
    checked = false,
    disabled = false,
    onChange = Function.prototype,
    
    className,
    ...props
}) {
    const input = React.useRef();

    const handleChange = event => onChange(value, input.current, event);

    const classNames = classnames('mdc-radio', {
        'mdc-radio--disabled': disabled
    }, className);

    useRendered(() => {
        input.current.blur();
    }, [checked]);

    return (
        <div className={classNames}>
            <input
                className="mdc-radio__native-control"
                ref={input}
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

            <div className="mdc-radio__ripple"></div>
        </div>
    );
}

Radio.displayName = 'MDCRadio';

Radio.propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired
};