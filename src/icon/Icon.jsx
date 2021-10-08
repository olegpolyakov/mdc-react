import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Icon = forwardRef(({
    size,
    light = false,
    dark = false,
    inactive = false,

    element = 'i',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, cssClasses.MATERIAL_ICONS, {
        [`${cssClasses.ROOT}--${size}`]: size,
        [cssClasses.LIGHT]: light,
        [cssClasses.DARK]: dark,
        [cssClasses.INACTIVE]: inactive
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

Icon.displayName = 'MDCIcon';

Icon.propTypes = {
    size: PropTypes.string,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    inactive: PropTypes.bool
};

export default Icon;