import React from 'react';
import classnames from 'classnames';

import './index.scss';

Icon.displayName = 'MDCIcon';

export default function Icon({
    size,
    dark = false,
    light = false,
    inactive = false,

    element = 'i',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-icon', 'material-icons', {
        [`mdc-icon--${size}`]: size,
        'mdc-icon--dark': dark,
        'mdc-icon--light': light,
        'mdc-icon--inactive': inactive
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}