import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Elevation = forwardRef(({
    z = 0,
    transition = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.Z}${z}`]: z,
        [cssClasses.TRANSITION]: transition
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

Elevation.displayName = 'MDCElevation';

export default Elevation;