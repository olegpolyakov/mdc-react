import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Icon);

function Icon({
    size,
    dark = false,
    light = false,
    inactive = false,

    element = 'i',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-icon', 'material-icons', {
        [`mdc-icon--${size}`]: size,
        'mdc-icon--dark': dark,
        'mdc-icon--light': light,
        'mdc-icon--inactive': inactive
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

Icon.displayName = 'MDCIcon';

Icon.propTypes = {
    size: PropTypes.string,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    inactive: PropTypes.bool
};