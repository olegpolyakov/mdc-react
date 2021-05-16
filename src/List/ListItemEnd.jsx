import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(ListItemEnd);

function ListItemEnd({
    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item__end', className);

    return React.isValidElement(children) ?
        React.cloneElement(children, {
            ref,
            className: classNames,
            ...props
        }) : (
            <Element ref={ref} className={classNames} {...props}>
                {children}
            </Element>
        );
}

ListItemEnd.displayName = 'MDCListItemEnd';