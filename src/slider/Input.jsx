import { forwardRef } from 'react';

import { cssClasses } from './constants';

const Input = forwardRef(({
    value,
    ...props
}, ref) => {
    return (
        <input
            ref={ref}
            className={cssClasses.INPUT}
            type="range"
            value={Math.round(value)}
            onChange={Function.prototype}
            {...props}
        />
    );
});

Input.displayName = 'MDCSliderInput';

export default Input;