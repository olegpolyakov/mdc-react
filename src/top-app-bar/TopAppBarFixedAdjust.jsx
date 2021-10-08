import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const TopAppBarFixedAdjust = forwardRef(({
    dense = false,
    prominent = false,
    short = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.FIXED_ADJUST, {
        [cssClasses.DENSE_FIXED_ADJUST]: dense,
        [cssClasses.PROMINENT_FIXED_ADJUST]: prominent,
        [cssClasses.DENSE_PROMINENT_FIXED_ADJUST]: dense && prominent,
        [cssClasses.SHORT_FIXED_ADJUST]: short
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

TopAppBarFixedAdjust.displayName = 'MDCTopAppBarFixedAdjust';

export default TopAppBarFixedAdjust;