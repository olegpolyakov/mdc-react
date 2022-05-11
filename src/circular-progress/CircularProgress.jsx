import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { strings, cssClasses, sizeProps, Size } from './constants';

const CircularProgress = forwardRef(({
    value = 0,
    size = Size.MEDIUM,
    indeterminate = false,
    closed = false,
    colorful = false,

    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ROOT}--${size}`]: size,
        [cssClasses.INDETERMINATE]: indeterminate,
        [cssClasses.CLOSED]: closed
    }, className);

    const { viewBox, radius, strokeDasharray, strokeWidth, gapPatchStrokeWidth, indeterminateStrokeDashoffset } = sizeProps[size];
    const progress = value > 1 ? (value / 100) : Number(value);
    const cx = viewBox / 2, cy = viewBox / 2;
    const strokeDashoffset = (2 * Math.PI * radius) * (1 - progress);

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
                <div className={cssClasses.DETERMINATE_CONTAINER}>
                    <svg className={cssClasses.DETERMINATE_CIRCLE_GRAPHIC} viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns={strings.XMLNS}>
                        <circle className={cssClasses.DETERMINATE_TRACK} cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} />
                        <circle className={cssClasses.DETERMINATE_CIRCLE} cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} />
                    </svg>
                </div>
            }

            {indeterminate &&
                <div className={cssClasses.INDETERMINATE_CONTAINER}>
                    {(colorful ? [1, 2, 3, 4] : [0]).map(n =>
                        <div key={n} className={classnames(cssClasses.SPINNER_LAYER, { [`${cssClasses.PROGRESS_COLOR}-${n}`]: n })}>
                            <div className={`${cssClasses.CIRCLE_CLIPPER} ${cssClasses.CIRCLE_LEFT}`}>
                                <svg className={cssClasses.INDETERMINATE_CIRCLE_GRAPHIC} viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns={strings.XMLNS}>
                                    <circle cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div><div className={cssClasses.GAP_PATCH}>
                                <svg className={cssClasses.INDETERMINATE_CIRCLE_GRAPHIC} viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns={strings.XMLNS}>
                                    <circle cx={cx} cy={cy} r={radius} strokeWidth={gapPatchStrokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div><div className={`${cssClasses.CIRCLE_CLIPPER} ${cssClasses.CIRCLE_RIGHT}`}>
                                <svg className={cssClasses.INDETERMINATE_CIRCLE_GRAPHIC} viewBox={`0 0 ${viewBox} ${viewBox}`} xmlns={strings.XMLNS}>
                                    <circle cx={cx} cy={cy} r={radius} strokeWidth={strokeWidth} strokeDasharray={strokeDasharray} strokeDashoffset={indeterminateStrokeDashoffset} />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
});

CircularProgress.displayName = 'MDCCircularProgress';

CircularProgress.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    size: PropTypes.oneOf([Size.SMALL, Size.MEDIUM, Size.LARGE]),
    indeterminate: PropTypes.bool,
    closed: PropTypes.bool,
    colorful: PropTypes.bool
};

CircularProgress.Size = Size;

export default CircularProgress;