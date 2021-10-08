import { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Switch = forwardRef(({
    selected = false,
    onChange = Function.prototype,

    className,
    ...props
}, ref) => {

    const handleClick = useCallback(event => {
        onChange(event, !selected, event.target);
    }, [selected, onChange]);

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.SELECTED]: selected,
        [cssClasses.UNSELECTED]: !selected
    }, className);

    return (
        <button
            ref={ref}
            type="button"
            className={classNames}
            role="switch"
            aria-checked={selected}
            onClick={handleClick}
            {...props}
        >
            <div className={cssClasses.TRACK} />

            <div className={cssClasses.HANDLE_TRACK}>
                <div className={cssClasses.HANDLE}>
                    <div className={cssClasses.SHADOW}>
                        <div className={cssClasses.ELEVATION_OVERLAY} />
                    </div>

                    <div className={cssClasses.RIPPLE} />

                    <div className={cssClasses.ICONS}>
                        <svg className={`${cssClasses.ICON} ${cssClasses.ICON_ON}`} viewBox="0 0 24 24">
                            <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
                        </svg>

                        <svg className={`${cssClasses.ICON} ${cssClasses.ICON_OFF}`} viewBox="0 0 24 24">
                            <path d="M20 13H4v-2h16v2z" />
                        </svg>
                    </div>
                </div>
            </div>
        </button>
    );
});

Switch.displayName = 'MDCSwitch';

Switch.propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

export default Switch;