import React from 'react';
import classnames from 'classnames';

Chip.displayName = 'MDCChip';

export default function Chip({
    value,
    text,
    leadingIcon,
    tarilingIcon,
    avatar,
    filtered = false,
    selected = false,

    element = 'div',
    component: Element = element,
    className,
    children = text,

    ...props
}) {
    const classNames = classnames('mdc-chip', {
        'mdc-chip--selected': selected
    }, className);

    return (
        <Element className={classNames} {...props}>
            {avatar &&
                React.cloneElement(avatar, { className: 'mdc-chip__avatar' })
            }

            {leadingIcon &&
                React.cloneElement(leadingIcon, {
                    className: classnames('mdc-chip__icon mdc-chip__icon--leading', {
                        'mdc-chip__icon--leading-hidden': filtered && selected
                    })
                })
            }

            {filtered &&
                <div className="mdc-chip__checkmark">
                    <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                        <path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                </div>
            }

            <div className="mdc-chip__text">{children}</div>

            {tarilingIcon &&
                React.cloneElement(tarilingIcon, {
                    className: classnames('mdc-chip__icon mdc-chip__icon--trailing'),
                    tabIndex: '0',
                    role: 'button'
                })
            }
        </Element>
    )
}