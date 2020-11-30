import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(LinearProgress);

function LinearProgress({
    value = 0,
    buffer = 0,
    indeterminate = false,
    reversed = false,
    closed = false,

    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-linear-progress', {
        'mdc-linear-progress--indeterminate': indeterminate,
        'mdc-linear-progress--animation-ready': indeterminate,
        'mdc-linear-progress--reversed': reversed,
        'mdc-linear-progress--closed': closed
    }, className);

    const primaryBarStyle = {
        transform: `scaleX(${indeterminate ? 1 : (value > 1 ? (value * 0.01) : value)})`
    };

    const bufferStyle = {
        flexBasis: buffer ? `${indeterminate ? 1 : (buffer < 1 ? (buffer * 100) : buffer)}%` : undefined
    };

    console.log(bufferStyle, primaryBarStyle);

    return (
        <div
            ref={ref}
            className={classNames}
            role="progressbar"
            {...props}
        >
            <div className="mdc-linear-progress__buffer">
                <div className="mdc-linear-progress__buffer-bar" style={bufferStyle} />
                <div className="mdc-linear-progress__buffer-dots" />
            </div>

            <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={primaryBarStyle}>
                <span className="mdc-linear-progress__bar-inner" />
            </div>

            <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span className="mdc-linear-progress__bar-inner" />
            </div>
        </div>
    );
}

LinearProgress.displayName = 'MDCLinearProgress';

LinearProgress.propTypes = {
    value: PropTypes.number,
    buffer: PropTypes.number,
    indeterminate: PropTypes.bool,
    reversed: PropTypes.bool,
    closed: PropTypes.bool
};