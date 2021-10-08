import { forwardRef, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Checkbox = forwardRef(({
    checked,
    indeterminate,
    disabled = false,
    touch = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    const handleChange = useCallback(event => {
        onChange(event, event.target.checked, event.target);
    }, [onChange]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.SELECTED]: checked,
        [cssClasses.DISABLED]: disabled,
        [cssClasses.TOUCH]: touch
    }, className);

    return (
        <div ref={ref} className={classNames}>
            <input
                ref={inputRef}
                className={cssClasses.NATIVE_CONTROL}
                type="checkbox"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
                {...props}
            />

            <div className={cssClasses.BACKGROUND}>
                <svg className={cssClasses.CHECKMARK} viewBox="0 0 24 24">
                    <path className={cssClasses.CHECKMARK_PATH} fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                </svg>

                <div className={cssClasses.MIXEDMARK} />
            </div>

            <div className={cssClasses.RIPPLE} />
        </div>
    );
});

Checkbox.displayName = 'MDCCheckbox';

Checkbox.propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    touch: PropTypes.bool,
    onChange: PropTypes.func
};

export default Checkbox;