import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(Elevation);

function Elevation({
    z = 0,
    transition = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-elevation', {
        [`mdc-elevation--z${z}`]: z,
        'mdc-elevation-transition': transition
    });

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

Elevation.displayName = 'MDCElevation';