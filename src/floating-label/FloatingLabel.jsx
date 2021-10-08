import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const FloatingLabel = forwardRef(({
    label,
    float = false,
    required = false,

    className,
    children = label,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.FLOAT]: float,
        [cssClasses.REQUIRED]: required
    }, className);

    return (
        <span ref={ref} className={classNames} {...props}>
            {children}
        </span>
    );
});

FloatingLabel.displayName = 'MDCFloatingLabel';

FloatingLabel.propTypes = {
    label: PropTypes.string,
    float: PropTypes.bool,
    required: PropTypes.bool
};

export default FloatingLabel;