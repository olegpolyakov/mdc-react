import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';
import { getEventKey, getValueForEventKey, getPageX, getTrackStyle, getThumbStyle } from './utils';

export default React.forwardRef(Slider);

function Slider({
    value = 0,
    min = 0,
    max = 100,
    step = 0,
    range = false,
    discrete = false,
    tickMarks = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) {
    const trackRef = useRef();

    const [active, setActive] = useState(false);
    const [focused, setFocused] = useState(false);

    useUpdated(() => {
        if (disabled) return;

        if (active) {
            document.body.addEventListener('mousemove', handleMove);
            document.body.addEventListener('touchmove', handleMove);
            document.body.addEventListener('mouseup', handleUp);
            document.body.addEventListener('touchend', handleUp);
        } else {
            document.body.removeEventListener('mousemove', handleMove);
            document.body.removeEventListener('touchmove', handleMove);
            document.body.removeEventListener('mouseup', handleUp);
            document.body.removeEventListener('touchend', handleUp);
        }
    }, [active]);

    const updateValue = useCallback(newValue => {
        const valueSetToBoundary = newValue === min || newValue === max;

        if (step && !valueSetToBoundary) {
            newValue = Math.round(newValue / step) * step;
        }

        if (newValue < min) {
            newValue = min;
        } else if (newValue > max) {
            newValue = max;
        }

        onChange(newValue);
    }, [min, max, step]);

    const handleMove = useCallback(event => {
        const trackClientRect = trackRef.current.getBoundingClientRect();
        const pageX = getPageX(event);
        const offsetX = pageX - trackClientRect.left;
        const percent = offsetX / trackClientRect.width;
        const value = min + percent * (max - min);

        updateValue(value);
    }, [max, min]);

    const handleRootInteraction = useCallback(event => handleMove(event), [handleMove]);

    const handleKeyDown = useCallback(event => {
        event.preventDefault();

        const eventKey = getEventKey(event);
        const newValue = getValueForEventKey(eventKey, value, min, max, step);

        if (isNaN(newValue)) return;

        updateValue(newValue);
        setFocused(true);
    }, [value, max, min, step]);

    const handleUp = useCallback(() => {
        setActive(false);
        setFocused(false);
    }, []);

    const handleThumbDown = useCallback(() => setActive(true), []);

    const handleThumbUp = useCallback(() => setActive(false), []);

    const handleFocus = useCallback(() => {
        if (active) return;

        setFocused(true);
    }, [active]);

    const handleBlur = useCallback(() => {
        setActive(false);
        setFocused(false);
    }, []);

    const classNames = classnames('mdc-slider', {
        'mdc-slider--active': active,
        'mdc-slider--focus': focused,
        'mdc-slider--disabled': disabled,
        'mdc-slider--range': range,
        'mdc-slider--discrete': discrete,
        'mdc-slider--tick-marks': tickMarks
    }, className);

    const trackStyle = getTrackStyle(value, min, max);
    const thumbStyle = getThumbStyle(value, min, max);

    return (
        <div
            ref={ref}
            className={classNames}
            onMouseDown={handleRootInteraction}
            onTouchStart={handleRootInteraction}
            {...props}
        >
            <div ref={trackRef} className="mdc-slider__track">
                <div className="mdc-slider__track--inactive" />

                <div className="mdc-slider__track--active">
                    <div className="mdc-slider__track--active_fill" style={trackStyle} />
                </div>

                {discrete && tickMarks &&
                    <div className="mdc-slider__tick-marks">
                        {Array.from(new Array(max / step + 1)).map((_, i) => i * step).map((tickValue, index) =>
                            <div
                                key={index}
                                className={
                                    classnames({
                                        'mdc-slider__tick-mark--active': tickValue <= value,
                                        'mdc-slider__tick-mark--inactive': tickValue > value
                                    })
                                }
                            />
                        )}
                    </div>
                }
            </div>

            <div
                className={classnames('mdc-slider__thumb', { 'mdc-slider__thumb--with-indicator': discrete && active })}
                role="slider"
                tabIndex={disabled ? '-1' : '0'}
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="50"
                aria-disabled={disabled || undefined}
                style={thumbStyle}
                onMouseDown={handleThumbDown}
                onMouseUp={handleThumbUp}
                onTouchStart={handleThumbDown}
                onTouchEnd={handleThumbUp}
                onKeyDown={handleKeyDown}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {discrete &&
                    <div className="mdc-slider__value-indicator-container">
                        <div className="mdc-slider__value-indicator">
                            <span className="mdc-slider__value-indicator-text">{value}</span>
                        </div>
                    </div>
                }

                <div className="mdc-slider__thumb-knob" />
            </div>

            {range &&
                <div className="mdc-slider__thumb" role="slider" tabIndex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                    <div className="mdc-slider__thumb-knob" />
                </div>
            }
        </div>
    );
}

Slider.displayName = 'MDCSlider';

Slider.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    discrete: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};