import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(FloatingLabel);

function FloatingLabel({
    float = false,
    required = false,

    className, ...props
}, ref) {
    const classNames = classnames('mdc-floating-label', {
        'mdc-floating-label--float-above': float,
        'mdc-floating-label--required': required
    }, className);

    return (
        <span ref={ref} className={classNames} {...props} />
    );
}

FloatingLabel.displayName = 'MDCFloatingLabel';

FloatingLabel.propTypes = {
    float: PropTypes.bool,
    required: PropTypes.bool
};