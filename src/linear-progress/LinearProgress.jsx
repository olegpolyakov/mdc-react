import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const LinearProgress = forwardRef(({
    value = 0,
    buffer = 0,
    indeterminate = false,
    closed = false,

    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.INDETERMINATE]: indeterminate,
        [cssClasses.ANIMATION_READY]: indeterminate,
        [cssClasses.CLOSED]: closed
    }, className);

    const primaryBarStyle = {
        transform: `scaleX(${indeterminate ? 1 : (value > 1 ? (value * 0.01) : value)})`
    };

    const bufferStyle = {
        flexBasis: buffer ? `${indeterminate ? 1 : (buffer < 1 ? (buffer * 100) : buffer)}%` : undefined
    };

    return (
        <div
            ref={ref}
            className={classNames}
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="1"
            aria-valuenow={value > 1 ? (value * 0.01) : value}
            {...props}
        >
            <div className={cssClasses.BUFFER}>
                <div className={cssClasses.BUFFER_BAR} style={bufferStyle} />
                <div className={cssClasses.BUFFER_DOTS} />
            </div>

            <div className={`${cssClasses.BAR} ${cssClasses.PRIMARY_BAR}`} style={primaryBarStyle}>
                <span className={cssClasses.BAR_INNER} />
            </div>

            <div className={`${cssClasses.BAR} ${cssClasses.SECONDARY_BAR}`}>
                <span className={cssClasses.BAR_INNER} />
            </div>
        </div>
    );
});

LinearProgress.displayName = 'MDCLinearProgress';

LinearProgress.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    buffer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    indeterminate: PropTypes.bool,
    closed: PropTypes.bool
};

export default LinearProgress;