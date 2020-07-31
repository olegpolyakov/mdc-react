import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(ListItemGraphic);

function ListItemGraphic({
    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item__graphic', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}
        </Element>
    );
}

ListItemGraphic.displayName = 'MDCListItemGraphic';