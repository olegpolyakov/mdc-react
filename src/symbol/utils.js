import { size } from './constants';

export function getSizeValue(arg) {
    if (arg === undefined) return;

    if (isNaN(arg)) {
        return size[arg.toUpperCase()];
    }

    return Number(arg);
}

export function getFontVariationSettings(fill, wght, grad, opsz) {
    let parts = [];

    if (fill) {
        parts.push('"FILL" 1');
    }

    if (!isNaN(wght)) {
        parts.push('"wght" ' + wght);
    }

    if (!isNaN(grad)) {
        parts.push('"GRAD" ' + Number(grad));
    }

    if (!isNaN(opsz)) {
        parts.push('"opsz" ' + opsz);
    }

    // "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 48
    return parts.length > 0 ? parts.join(', ') : undefined;
}