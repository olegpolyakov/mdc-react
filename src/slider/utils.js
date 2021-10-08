import { Key } from '../constants';

export function getValueForEventKey(eventKey, value, min, max, step) {
    const delta = Number(step) || (max - min) / 100;

    switch (eventKey) {
        case Key.ARROW_LEFT:
        case Key.ARROW_DOWN:
            return value - delta;

        case Key.ARROW_RIGHT:
        case Key.ARROW_UP:
            return value + delta;

        case Key.HOME:
            return min;

        case Key.END:
            return max;

        default:
            return NaN;
    }
}