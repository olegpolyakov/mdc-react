import { useRef, useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Radio = forwardRef(({
    value,
    checked,
    disabled = false,
    touch = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) => {
    const inputRef = useRef();

    const handleChange = useCallback(event => {
        onChange(event, event.target.value, event.target);
    }, [onChange]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.DISABLED]: disabled,
        [cssClasses.TOUCH]: touch
    }, className);

    return (
        <div ref={ref} className={classNames}>
            <input
                ref={inputRef}
                className={cssClasses.NATIVE_CONTROL}
                type="radio"
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />

            <div className={cssClasses.BACKGROUND}>
                <div className={cssClasses.OUTER_CIRCLE} />
                <div className={cssClasses.INNER_CIRCLE} />
            </div>

            <div className={cssClasses.RIPPLE} />
        </div>
    );
});

Radio.displayName = 'MDCRadio';

Radio.propTypes = {
    value: PropTypes.any,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    touch: PropTypes.bool,
    onChange: PropTypes.func
};

export default Radio;