import classnames from 'classnames';

import { cssClasses } from './constants';

const TickMarks = ({
    value,
    max,
    step = 1
}) => {
    return (
        <div className={cssClasses.TICK_MARKS}>
            {Array.from(new Array(max / step + 1))
                .map((_, i) => i * step)
                .map((tickValue, index) =>
                    <div
                        key={index}
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