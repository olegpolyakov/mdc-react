import React, { forwardRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';

export default forwardRef(LineRipple);

function LineRipple({
    active = false,

    className,
    ...props
}, ref) {
    const [deactivating, setDeactivating] = useState(false);

    useUpdated(() => {
        if (!active) {
            setDeactivating(true);
        }
    }, [active]);

    const handleTransitionEnd = useCallback(event => {
        if (event.propertyName === 'opacity') {
            if (deactivating) {
                setDeactivating(false);
            }
        }
    }, [deactivating]);

    const classNames = classnames('mdc-line-ripple', {
        'mdc-line-ripple--active': active || deactivating,
        'mdc-line-ripple--deactivating': deactivating
    }, className);

    return (
        <span
            ref={ref}
            className={classNames}
            onTransitionEnd={handleTransitionEnd}
            {...props}
        />
    );
}

LineRipple.displayName = 'MDCLineRipple';

LineRipple.propTypes = {
    active: PropTypes.bool
};