import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(CircularProgress);

function CircularProgress({
    value = 0,
    size,
    indeterminate = false,
    closed = false,
    colorful = false,

    className,
    ...props
}, ref) {
    const progress = value > 1 ? (value / 100) : Number(value);
    const { viewBox, radius, strokeDasharray, indeterminateStrokeDashoffset } = getSizeProps(size);
    const cx = viewBox / 2, cy = viewBox / 2;
    const strokeDashoffset = (2 * Math.PI * radius) * (1 - progress);

    const classNames = classnames('mdc-circular-progress', {
        'mdc-circular-progress--large': size === 'large',
        'mdc-circular-progress--medium': size === 'medium',
        'mdc-circular-progress--small': size === 'small',
        'mdc-circular-progress--indeterminate': indeterminate,
        'mdc-circular-progress--closed': closed
    });

    return (
        <div
            ref={ref}
            className={classNames}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={1}
            aria-valuenow={progress}
            {...props}
        >
            {!indeterminate &&
                <div className="mdc-circular-progress__determinate-container">
                    <svg className="mdc-circular-progress__determinate-circle-graphic" viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
                        <circle className="mdc-circular-progress__determinate-circle" cx={cx} cy={cy} r={radius} strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} />
                    </svg>
                </div>
            }

            {indeterminate &&
                <div className="mdc-circular-progress__indeterminate-container">
                    {(colorful ? [1, 2, 3, 4] : [0]).map(n =>
                        <div key={n} className={classnames('mdc-circular-progress__spinner-layer', { [`mdc-circular-progress__color-${n}`]: n })}>
                            <div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                                <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={cx} cy={cy} r={radius} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div><div className="mdc-circular-progress__gap-patch">
                                <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={cx} cy={cy} r={radius} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div><div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                                <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx={cx} cy={cy} r={radius} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

CircularProgress.displayName = 'MDCCircularProgress';

CircularProgress.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const sizeProps = {
    large: {
        viewBox: 48,
        radius: 18,
        strokeDasharray: 113.097,
        indeterminateStrokeDashoffset: 56.549
    },
    medium: {
        viewBox: 32,
        radius: 12.5,
        strokeDasharray: 78.54,
        indeterminateStrokeDashoffset: 39.27
    },
    small: {
        viewBox: 24,
        radius: 8.75,
        strokeDasharray: 54.978,
        indeterminateStrokeDashoffset: 27.489
    }
};

function getSizeProps(size = 'large') {
    return sizeProps[size];
}