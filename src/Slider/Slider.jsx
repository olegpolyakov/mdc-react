import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useMounted, useUpdated } from '../lifecycle-hooks';

export default function Slider({
    value = 0,
    min = 0,
    max = 100,
    step = 0,
    discrete = false,
    displayMarkers = false,
    disabled = false,
    onChange = Function.prototype,

    className,
    ...props
}) {
    const rootElement = React.useRef();
    const thumbElement = React.useRef();
    const clientRect = React.useRef();

    const [active, setActive] = React.useState(false);
    const [focused, setFocused] = React.useState(false);

    function updateValue(newValue) {
        if (newValue === value) return;

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
    }

    const handleUp = React.useCallback(event => {
        setActive(false);
        setFocused(false);
    }, []);
    
    const handleMove = React.useCallback(event => {
        const pageX = getPageX(event);
        const offsetX = pageX - clientRect.current.left;
        const pctComplete = offsetX / clientRect.current.width;
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        const value = min + pctComplete * (max - min);

        updateValue(value);
    }, []);

    function handleRootInteraction(event) {
        handleMove(event);
    }

    function handleThumbDown(event) {
        setActive(true);
    }

    function handleThumbUp(event) {
        setActive(false);
    }

    function handleKeyDown(event) {
        event.preventDefault();

        const keyId = getKeyId(event);
        const newValue = getValueForKeyId(keyId, value, min, max, step);
        
        if (isNaN(newValue)) return;

        updateValue(newValue);
        setFocused(true);
    };

    function handleFocus() {
        if (active) return;

        setFocused(true);
    }

    function handleBlur() {
        setActive(false);
        setFocused(false);
    }

    useMounted(() => {
        function handleResize() {
            clientRect.current = rootElement.current.getBoundingClientRect();
            const { transform } = getThumbStyle(clientRect.current, value, min, max);
            thumbElement.current.style.transform = transform;
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

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

    const classNames = classnames('mdc-slider', {
        'mdc-slider--active': active,
        'mdc-slider--focus': focused,
        'mdc-slider--discrete': discrete,
        'mdc-slider--display-markers': displayMarkers,
        'mdc-slider--disabled': disabled
    }, className);

    
    const thumbStyle = getThumbStyle(clientRect.current, value, min, max);
    const trackStyle = getTrackStyle(value, min, max);
    
    return (
        <div
            className={classNames}
            role="slider"
            tabIndex="0"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-disabled={disabled}
            ref={rootElement}
            onMouseDown={handleRootInteraction}
            onTouchStart={handleRootInteraction}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <div className="mdc-slider__track-container">
                <div className="mdc-slider__track" style={trackStyle} />

                {discrete && displayMarkers &&
                    <div className="mdc-slider__track-marker-container">
                        {new Array(max / step).fill().map((_, index) =>
                            <div key={index} className="mdc-slider__track-marker"></div>  
                        )}
                    </div>
                }
            </div>

            <div
                ref={thumbElement}
                className="mdc-slider__thumb-container"
                style={thumbStyle}
                onMouseDown={handleThumbDown}
                onMouseUp={handleThumbUp}
                onTouchStart={handleThumbDown}
                onTouchEnd={handleThumbUp}
            >
                {discrete &&
                    <div className="mdc-slider__pin">
                        <span className="mdc-slider__pin-value-marker">{value}</span>
                    </div>
                }

                <svg className="mdc-slider__thumb" width="21" height="21">
                    <circle cx="10.5" cy="10.5" r="7.875" />
                </svg>

                <div className="mdc-slider__focus-ring" />
            </div>
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

const KEY_IDS = {
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    END: 'End',
    HOME: 'Home',
    PAGE_DOWN: 'PageDown',
    PAGE_UP: 'PageUp',
};

function getKeyId(event) {
    if (event.key === KEY_IDS.ARROW_LEFT || event.keyCode === 37) {
        return KEY_IDS.ARROW_LEFT;
    }
    if (event.key === KEY_IDS.ARROW_RIGHT || event.keyCode === 39) {
        return KEY_IDS.ARROW_RIGHT;
    }
    if (event.key === KEY_IDS.ARROW_UP || event.keyCode === 38) {
        return KEY_IDS.ARROW_UP;
    }
    if (event.key === KEY_IDS.ARROW_DOWN || event.keyCode === 40) {
        return KEY_IDS.ARROW_DOWN;
    }
    if (event.key === KEY_IDS.HOME || event.keyCode === 36) {
        return KEY_IDS.HOME;
    }
    if (event.key === KEY_IDS.END || event.keyCode === 35) {
        return KEY_IDS.END;
    }
    if (event.key === KEY_IDS.PAGE_UP || event.keyCode === 33) {
        return KEY_IDS.PAGE_UP;
    }
    if (event.key === KEY_IDS.PAGE_DOWN || event.keyCode === 34) {
        return KEY_IDS.PAGE_DOWN;
    }

    return '';
}

function getValueForKeyId(keyId, value, min, max, step) {
    const delta = step || (max - min) / 100;

    switch (keyId) {
        case KEY_IDS.ARROW_LEFT:
        case KEY_IDS.ARROW_DOWN:
            return value - delta;

        case KEY_IDS.ARROW_RIGHT:
        case KEY_IDS.ARROW_UP:
            return value + delta;

        case KEY_IDS.HOME:
            return min;

        case KEY_IDS.END:
            return max;

        default:
            return NaN;
    }
}

function getPageX(event) {
    if (event.targetTouches && event.targetTouches.length > 0) {
        return event.targetTouches[0].pageX;
    }

    return event.pageX;
}

function getThumbStyle(clientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }, value, min, max) {
    const pctComplete = (value - min) / (max - min);
    const translateX = pctComplete * clientRect.width;

    return {
        transform: `translateX(${translateX}px) translateX(-50%)`
    };
}

function getTrackStyle(value, min, max) {
    const scaleX = (value - min) / (max - min);

    return {
        transform: `scaleX(${scaleX})`
    };
}