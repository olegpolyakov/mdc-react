import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Chip({
    value,
    text,
    leadingIcon,
    trailingIcon,
    selected = false,
    outlined = false,
    onClick = Function.prototype,

    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}) {
    const handleClick = useCallback(() => onClick(value), [value]);

    const classNames = classnames('mdc-chip', {
        'mdc-chip--selected': selected,
        'mdc-chip--outlined': outlined
    }, className);

    return (
        <Element className={classNames} onClick={handleClick} {...props}>
            <div className="mdc-chip__ripple" />

            {(leadingIcon && React.isValidElement(leadingIcon)) &&
                React.cloneElement(leadingIcon, {
                    className: classnames('mdc-chip__icon mdc-chip__icon--leading', {
                        'mdc-chip__icon--leading-hidden': selected
                    })
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
                    className: classnames('mdc-chip__icon mdc-chip__icon--trailing'),
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
    tarilingIcon: PropTypes.element,
    selected: PropTypes.bool,
    outlined: PropTypes.bool,
    onClick: PropTypes.func
};