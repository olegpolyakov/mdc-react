import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(ListItemGraphic);

function ListItemGraphic({
    className,
    children,
    ...props
}, ref) {
    return React.cloneElement(children, {
        ref,
        className: classnames('mdc-list-item__graphic', className),
        ...props
    });
}

ListItemGraphic.displayName = 'MDCListItemGraphic';