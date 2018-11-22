import React from 'react';
import classnames from 'classnames';

const Element = React.forwardRef(({ type, className, classNames = [], ...props }, ref) => {
    return React.createElement(type, {
        ref: ref,
        className: classnames(className, ...classNames),
        ...props
    })
});

Element.Clone = function Clone({ element, className, classNames = [], ...props }) {
    return React.cloneElement(element, {
        className: classnames(className, ...classNames),
        ...props
    });
};

export default Element;