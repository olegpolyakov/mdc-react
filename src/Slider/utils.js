const EVENT_KEY = {
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_UP: 'ArrowUp',
    END: 'End',
    HOME: 'Home',
    PAGE_DOWN: 'PageDown',
    PAGE_UP: 'PageUp',
};

export function getEventKey(event) {
    if (event.key === EVENT_KEY.ARROW_LEFT || event.keyCode === 37) {
        return EVENT_KEY.ARROW_LEFT;
    }
    if (event.key === EVENT_KEY.ARROW_RIGHT || event.keyCode === 39) {
        return EVENT_KEY.ARROW_RIGHT;
    }
    if (event.key === EVENT_KEY.ARROW_UP || event.keyCode === 38) {
        return EVENT_KEY.ARROW_UP;
    }
    if (event.key === EVENT_KEY.ARROW_DOWN || event.keyCode === 40) {
        return EVENT_KEY.ARROW_DOWN;
    }
    if (event.key === EVENT_KEY.HOME || event.keyCode === 36) {
        return EVENT_KEY.HOME;
    }
    if (event.key === EVENT_KEY.END || event.keyCode === 35) {
        return EVENT_KEY.END;
    }
    if (event.key === EVENT_KEY.PAGE_UP || event.keyCode === 33) {
        return EVENT_KEY.PAGE_UP;
    }
    if (event.key === EVENT_KEY.PAGE_DOWN || event.keyCode === 34) {
        return EVENT_KEY.PAGE_DOWN;
    }

    return '';
}

export function getValueForEventKey(eventKey, value, min, max, step) {
    const delta = step || (max - min) / 100;

    switch (eventKey) {
        case EVENT_KEY.ARROW_LEFT:
        case EVENT_KEY.ARROW_DOWN:
            return value - delta;

        case EVENT_KEY.ARROW_RIGHT:
        case EVENT_KEY.ARROW_UP:
            return value + delta;

        case EVENT_KEY.HOME:
            return min;

        case EVENT_KEY.END:
            return max;

        default:
            return NaN;
    }
}

export function getPageX(event) {
    if (event.targetTouches && event.targetTouches.length > 0) {
        return event.targetTouches[0].pageX;
    }

    return event.pageX;
}

export function getTrackStyle(value, min, max) {
    const scaleX = (value - min) / (max - min);

    return {
        transform: `scaleX(${scaleX})`
    };
}

export function getThumbStyle(value, min, max) {
    const percent = (value - min) / (max - min);

    return {
        left: `calc(${percent * 100}% - 24px)`
    };
}