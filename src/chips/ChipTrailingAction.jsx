import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { chipCssClasses as cssClasses } from './constants';

export default function ChipTrailingAction({
    icon,
    presentational = false,
    ...props
}) {
    const classNames = classnames(cssClasses.ACTION, cssClasses.TRAILING_ACTION, {
        [cssClasses.PRESENTATIONAL_ACTION]: presentational
    });

    return (
        <button
            className={classNames}
            type="button"
            tabIndex="-1"
            aria-hidden="true"
            {...props}
        >
            <span className={`${cssClasses.RIPPLE} ${cssClasses.TRAILING_RIPPLE}`} />

            <Clone
                component={icon}
                fallback={Icon}
                className={`${cssClasses.ICON} ${cssClasses.TRAILING_ICON}`}
            />
        </button>
    );
}