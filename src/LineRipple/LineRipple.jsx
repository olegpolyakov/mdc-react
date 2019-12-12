import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { useUpdated } from '../lifecycle-hooks';

export default function LineRipple({
    active = false,
    center = 0,
    
    className,
    ...props
}) {
    const [deactivating, setDeactivating] = React.useState(false);

    function handleTransitionEnd(event) {
        if (event.propertyName === 'opacity') {
            if (deactivating) {
                setDeactivating(false);
            }
        }
    }

    useUpdated(() => {
        if (!active) {
            setDeactivating(true);
        }
    }, [active]);

    const classNames = classnames('mdc-line-ripple', {
        'mdc-line-ripple--active': active || deactivating,
        'mdc-line-ripple--deactivating': deactivating
    }, className);

    const style = {
        transformOrigin: center ? `${center}px center` : undefined
    };
    
    return (
        <div
            className={classNames}
            style={style}
            onTransitionEnd={handleTransitionEnd}
            {...props}
        />
    );
}

LineRipple.displayName = 'MDCLineRipple';

LineRipple.propTypes = {
    active: PropTypes.bool,
    center: PropTypes.number
};