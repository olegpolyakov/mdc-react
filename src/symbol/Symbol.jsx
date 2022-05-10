import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';
import { getSizeValue, getFontVariationSettings } from './utils';

const Symbol = forwardRef(({
    name,
    type = 'outlined',
    size,
    weight,
    grade,
    filled = false,
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

    const fontVariationSettings = getFontVariationSettings(filled, weight, grade, getSizeValue(size));
    const style = fontVariationSettings ? {
        fontVariationSettings
    } : undefined;

    return (
        <Element
            ref={ref}
            style={style}
            className={classNames}
            {...props}
        >
            {children}
        </Element>
    );
});

Symbol.displayName = 'MDCSymbol';

Symbol.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(['outlined', 'rounded', 'sharp']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    grade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    filled: PropTypes.bool,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    inactive: PropTypes.bool
};

export default Symbol;