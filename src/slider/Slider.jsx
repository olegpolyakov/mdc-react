import { forwardRef, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../hooks';
import { getEventKey, getPageX } from '../utils';

import { cssClasses } from './constants';
import { getValueForEventKey } from './utils';
import Input from './Input';
import Track from './Track';
import Thumb from './Thumb';

const Slider = forwardRef(({
    name,
    value = 0,
    min = 0,
    max = 100,
    step,
    discrete = false,
    disabled = false,
    tickMarks = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) => {
    const inputRef = useRef();
    const trackRef = useRef();

    const [active, setActive] = useState(false);

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

        return () => {
            document.body.removeEventListener('mousemove', handleMove);
            document.body.removeEventListener('touchmove', handleMove);
            document.body.removeEventListener('mouseup', handleUp);
            document.body.removeEventListener('touchend', handleUp);
        };
    }, [active]);

    const updateValue = useCallback(newValue => {
        if (newValue < min) {
            newValue = Number(min);
        } else if (newValue > max) {
            newValue = Number(max);
        }

        if (step) {
            newValue = Math.round(newValue / step) * step;
        }

        onChange(newValue);
    }, [min, max, step, onChange]);

    const handleMove = useCallback(event => {
        const trackClientRect = trackRef.current.getBoundingClientRect();
        const pageX = getPageX(event);
        const offsetX = pageX - trackClientRect.left;
        const percent = offsetX / trackClientRect.width;
        const value = Number(min) + percent * (max - min);

        updateValue(value);
    }, [min, max, updateValue]);

    const handleKeyDown = useCallback(event => {
        event.preventDefault();

        const value = Number(inputRef.current.value);
        const eventKey = getEventKey(event);
        const newValue = getValueForEventKey(eventKey, value, min, max, step);

        if (isNaN(newValue)) return;

        updateValue(newValue);
    }, [min, max, step, updateValue]);

    const handleRootInteraction = useCallback(event => {
        handleMove(event);
    }, [handleMove]);

    const handleUp = useCallback(() => {
        setActive(false);
    }, []);

    const handleThumbStartInteraction = useCallback(() => {
        setActive(true);
    }, []);

    const handleThumbEndInteraction = useCallback(() => {
        setActive(false);
    }, []);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.DISCRETE]: discrete,
        [cssClasses.DISABLED]: disabled
    }, className);

    return (
        <div
            ref={ref}
            className={classNames}
            onMouseDown={handleRootInteraction}
            onTouchStart={handleRootInteraction}
            {...props}
        >
            <Input
                ref={inputRef}
                name={name}
                value={value}
                min={min}
                max={max}
                step={step}
                disabled={disabled}
            />

            <Track
                ref={trackRef}
                value={value}
                min={min}
                max={max}
                step={step}
                discrete={discrete}
                tickMarks={tickMarks}
            />

            <Thumb
                value={value}
                min={min}
                max={max}
                discrete={discrete}
                onStartInteraction={handleThumbStartInteraction}
                onEndInteraction={handleThumbEndInteraction}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
});

Slider.displayName = 'MDCSlider';

Slider.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    min: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    max: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    step: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    discrete: PropTypes.bool,
    disabled: PropTypes.bool,
    tickMarks: PropTypes.bool,
    onChange: PropTypes.func
};

export default Slider;