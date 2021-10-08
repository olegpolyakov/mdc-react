import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const LineRipple = forwardRef(({
    active = false,
    transformOrigin,

    ...props
}, ref) => {
    const style = transformOrigin && {
        transformOrigin: `${transformOrigin}px`
    };

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ACTIVE]: active
    });

    return (
        <span
            ref={ref}
            style={style}
            className={classNames}
            {...props}
        />
    );
});

LineRipple.displayName = 'MDCLineRipple';

LineRipple.propTypes = {
    active: PropTypes.bool
};

export default LineRipple;