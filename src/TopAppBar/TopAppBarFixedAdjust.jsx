import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(TopAppBarFixedAdjust);

function TopAppBarFixedAdjust({
    prominent = false,
    dense = false,
    short = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-top-app-bar--fixed-adjust', {
        'mdc-top-app-bar--prominent-fixed-adjust': prominent,
        'mdc-top-app-bar--dense-fixed-adjust': dense,
        'mdc-top-app-bar--dense-prominent-fixed-adjust': dense && prominent,
        'mdc-top-app-bar--short-fixed-adjust': short
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

TopAppBarFixedAdjust.displayName = 'MDCTopAppBarFixedAdjust';