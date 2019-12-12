import React from 'react';
import classnames from 'classnames';

export default function Elevation({
    z = 0,
    transition = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-elevation', {
        [`mdc-elevation--z${z}`]: z,
        'mdc-elevation-transition': transition
    });

    return (
        <Element className={classNames} {...props} />
    );
}

Elevation.displayName = 'MDCElevation';