import React from 'react';
import classnames from 'classnames';

export default function Icon({
    size,
    dark = false,
    light = false,
    inactive = false,

    element = 'i',
    component = element,
    className,
    ...props
}) {
    const Element = component;
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