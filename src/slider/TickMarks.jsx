import classnames from 'classnames';

import { cssClasses } from './constants';

const TickMarks = ({
    value,
    min,
    max,
    step = 1
}) => {
    return (
        <div className={cssClasses.TICK_MARKS}>
            {Array.from(new Array((max - min) / step + 1))
                .map((_, i) => step * i + Number(min))
                .map(tickValue =>
                    <div
                        key={tickValue}
                        data-value={tickValue}
                        className={
                            classnames({
                                [cssClasses.TICK_MARK_ACTIVE]: tickValue <= value,
                                [cssClasses.TICK_MARK_INACTIVE]: tickValue > value
                            })
                        }
                    />
                )
            }
        </div>
    );
};

TickMarks.displayName = 'MDCSliderTickMarks';

export default TickMarks;