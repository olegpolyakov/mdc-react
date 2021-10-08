import { forwardRef, useState, useCallback } from 'react';
import classnames from 'classnames';

import { numbers, cssClasses } from './constants';

const Thumb = forwardRef(({
    value,
    min,
    max,
    discrete,
    disabled,
    onStartInteraction,
    onEndInteraction,
    ...props
}, ref) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    const classNames = classnames(cssClasses.THUMB, {
        [cssClasses.THUMB_FOCUSED]: focused,
        [cssClasses.THUMB_WITH_INDICATOR]: discrete && focused
    });

    const style = {
        left: `calc(${(value - min) / (max - min) * 100}% - ${numbers.THUMB_WIDTH * 0.5}px)`
    };

    return (
        <div
            ref={ref}
            className={classNames}
            role="slider"
            tabIndex={disabled ? '-1' : '0'}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="50"
            aria-disabled={disabled || undefined}
            style={style}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseDown={onStartInteraction}
            onMouseUp={onEndInteraction}
            onTouchStart={onStartInteraction}
            onTouchEnd={onEndInteraction}
            {...props}
        >
            {discrete &&
                <div className={cssClasses.VALUE_INDICATOR_CONTAINER}>
                    <div className={cssClasses.VALUE_INDICATOR}>
                        <span className={cssClasses.VALUE_INDICATOR_TEXT}>{value}</span>
                    </div>
                </div>
            }

            <div className={cssClasses.THUMB_KNOB} />
        </div>
    );
});

Thumb.displayName = 'MDCSliderThumb';

export default Thumb;