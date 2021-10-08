import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Badge = forwardRef(({
    value,
    inset = false,
    transparent = false,

    element: Element = 'span',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.INSET]: inset,
        [cssClasses.TRANSPARENT]: transparent
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            data-badge={value}
            {...props}
        />
    );
});

Badge.displayName = 'MDCBadge';

Badge.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    inset: PropTypes.bool,
    transparent: PropTypes.bool
};

export default Badge;