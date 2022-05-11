import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Icon = forwardRef(({
    name,
    type,
    size,
    light = false,
    dark = false,
    inactive = false,

    element = 'i',
    component: Element = element,
    children = name,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ROOT}--${type}`]: type,
        [`${cssClasses.ROOT}--${size}`]: size,
        [cssClasses.LIGHT]: light,
        [cssClasses.DARK]: dark,
        [cssClasses.INACTIVE]: inactive
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}
        </Element>
    );
});

Icon.displayName = 'MDCIcon';

Icon.propTypes = {
    type: PropTypes.oneOf(['', 'filled', 'outlined', 'round', 'sharp', 'two-tone']),
    size: PropTypes.string,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    inactive: PropTypes.bool
};

export default Icon;