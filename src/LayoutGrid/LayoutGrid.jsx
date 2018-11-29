import React from 'react';
import classnames from 'classnames';

export default function LayoutGrid({
    align,
    fixed = false,

    element = 'div',
    component = element,
    className,
    children,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-layout-grid', {
        [`mdc-layout-grid--align-${align}`]: align,
        'mdc-layout-grid--fixed-column-width': fixed
    }, className);

    return (
        <Element className={classNames} {...props}>
            <div className="mdc-layout-grid__inner">{children}</div>
        </Element>
    );
}