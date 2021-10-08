import { forwardRef } from 'react';
import classnames from 'classnames';

import { create, clone } from '../component';
import { cssClasses } from './constants';

const MenuAnchor = forwardRef(({
    wrap = true,

    element = 'div',
    className,
    children,
    ...props
}, ref) => {
    return wrap ?
        create(element, {
            ref,
            className: classnames(cssClasses.SURFACE_ANCHOR, className),
            ...props
        }, children)
        :
        clone(children, {
            ref,
            className: classnames(children.props.className, cssClasses.SURFACE_ANCHOR),
            ...props
        });
});

MenuAnchor.displayName = 'MDCMenuAnchor';

export default MenuAnchor;