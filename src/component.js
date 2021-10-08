import { isValidElement, forwardRef, cloneElement, createElement } from 'react';
import classnames from 'classnames';

export function createComponent({ displayName, propTypes, defaultProps, }, fn) {
    const Component = fn.length > 1 ? forwardRef(fn) : fn;

    Component.displayName = displayName;
    Component.propTypes = propTypes;
    Component.defaultProps = defaultProps;

    return Component;
}

export const Clone = forwardRef(function Clone({
    component,
    fallback,

    className,
    children = component,
    ...props
}, ref) {
    if (isValidElement(component)) {
        return cloneElement(component, {
            ref,
            className: classnames(className, component.props.className),
            ...props
        });
    } else if (isValidElement(fallback)) {
        return cloneElement(fallback, {
            ref,
            className: classnames(className, fallback.props.className),
            ...props
        });
    } else if (fallback) {
        return createElement(fallback, {
            ref,
            className,
            ...props
        }, children);
    } else {
        return children;
    }
});

export {
    isValidElement as isElement,
    cloneElement as clone,
    createElement as create
};