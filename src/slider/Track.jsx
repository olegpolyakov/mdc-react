import { forwardRef } from 'react';

import { cssClasses } from './constants';
import TickMarks from './TickMarks';

const Track = forwardRef(({
    value,
    min,
    max,
    step,
    discrete,
    tickMarks
}, ref) => {
    const style = {
        transform: `scaleX(${(value - min) / (max - min)})`
    };

    return (
        <div ref={ref} className={cssClasses.TRACK}>
            <div className={cssClasses.TRACK_INACTIVE} />

            <div className={cssClasses.TRACK_ACTIVE}>
                <div
                    className={cssClasses.TRACK_ACTIVE_FILL}
                    style={style}
                />
            </div>

            {discrete && tickMarks &&
                <TickMarks
                    value={value}
                    max={max}
                    step={step}
                />
            }
        </div>
    );
});

Track.displayName = 'MDCSliderTrack';

export default Track;