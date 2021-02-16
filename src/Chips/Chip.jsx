import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Chip);

function Chip({
    value,
    text,
    icon,
    leadingIcon = icon,
    trailingIcon,
    selected = false,
    outlined = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) {
    const classNames = classnames('mdc-chip', {
        'mdc-chip--selected': selected,
        'mdc-chip--outlined': outlined
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            data-value={value}
            {...props}
        >
            <div className="mdc-chip__ripple" />

            {leadingIcon &&
                React.cloneElement(leadingIcon, {
                    className: classnames('mdc-chip__icon mdc-chip__icon--leading', {
                        'mdc-chip__icon--leading-hidden': selected
                    }, leadingIcon.props.className)
                })
            }

            {selected &&
                <div className="mdc-chip__checkmark">
                    <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                        <path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                    </svg>
                </div>
            }

            <div className="mdc-chip__text">{children}</div>

            {trailingIcon &&
                React.cloneElement(trailingIcon, {
                    className: classnames('mdc-chip__icon mdc-chip__icon--trailing', trailingIcon.props.className),
                    tabIndex: '0',
                    role: 'button'
                })
            }
        </Element>
    );
}

Chip.displayName = 'MDCChip';

Chip.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string,
    leadingIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    trailingIcon: PropTypes.element,
    selected: PropTypes.bool,
    outlined: PropTypes.bool,
    onClick: PropTypes.func
};