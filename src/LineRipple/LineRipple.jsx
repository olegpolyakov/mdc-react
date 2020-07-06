import React, { forwardRef, useRef, useState, useCallback, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';

export default forwardRef(LineRipple);

function LineRipple({
    active = false,

    className,
    ...props
}, ref) {
    const elementRef = useRef();
    const [deactivating, setDeactivating] = useState(false);

    useImperativeHandle(ref, () => elementRef.current);

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
            ref={elementRef}
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