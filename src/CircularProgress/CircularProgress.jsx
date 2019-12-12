import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function CircularProgress({ value = 0, className, ...props }) {
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const progress = value / 100;
    const dashOffset = circumference * (1 - progress);
    const classNames = classnames('mdc-circular-progress', className);

    return (
        <svg
            className={classNames}
            viewBox="0 0 48 48"
            {...props}
        >
            <circle
                className="mdc-circular-progress__background"
                cx="24" cy="24" r={radius}
            />

            <circle
                className="mdc-circular-progress__foreground"
                cx="24" cy="24" r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
            />
        </svg>
    );
}

CircularProgress.displayName = 'MDCCircularProgress';

CircularProgress.propTypes = {
    value: PropTypes.number
};