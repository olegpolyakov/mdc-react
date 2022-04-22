import { Key, KeyCode } from './constants';

export function getClientWidth(element) {
    if (element.offsetParent !== null) {
        return element.clientWidth;
    }

    const clone = element.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    const clientWidth = clone.clientWidth;
    document.documentElement.removeChild(clone);

    return clientWidth;
}

export function getClientHeight(element) {
    if (element.offsetParent !== null) {
        return element.clientHeight;
    }

    const clone = element.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    const clientHeight = clone.clientHeight;
    document.documentElement.removeChild(clone);

    return clientHeight;
}

export function getEventKey(event) {
    switch (event.key || event.keyCode) {
        case Key.ARROW_LEFT:
        case KeyCode.ARROW_LEFT:
            return Key.ARROW_LEFT;

        case Key.ARROW_UP:
        case KeyCode.ARROW_UP:
            return Key.ARROW_UP;

        case Key.ARROW_RIGHT:
        case KeyCode.ARROW_RIGHT:
            return Key.ARROW_RIGHT;

        case Key.ARROW_DOWN:
        case KeyCode.ARROW_DOWN:
            return Key.ARROW_DOWN;

        case Key.HOME:
        case KeyCode.HOME:
            return Key.HOME;

        case Key.END:
        case KeyCode.END:
            return Key.END;

        case Key.PAGE_UP:
        case KeyCode.PAGE_UP:
            return Key.PAGE_UP;

        case Key.PAGE_DOWN:
        case KeyCode.PAGE_DOWN:
            return Key.PAGE_DOWN;

        default:
            return undefined;
    }
}

export function getPageX(event) {
    if (event.targetTouches?.length > 0) {
        return event.targetTouches[0].pageX;
    }

    return event.pageX;
}

export function getPageY(event) {
    if (event.targetTouches?.length > 0) {
        return event.targetTouches[0].pageY;
    }

    return event.pageY;
}