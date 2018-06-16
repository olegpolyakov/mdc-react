import React from 'react';
import classnames from 'classnames';

export default function Chip({ element = 'span', text, leadingIcon, tarilingIcon, filtered, selected, children, ...props }) {
    return React.createElement(element,
        {
            className: classnames('mdc-chip', {
                'mdc-chip--selected': selected
            }),
            ...props
        },

        leadingIcon && React.cloneElement(leadingIcon, {
            className: classnames('mdc-chip__icon mdc-chip__icon--leading', {
                'mdc-chip__icon--leading-hidden': filtered && selected
            })
        }),

        filtered && (
            <div className="mdc-chip__checkmark" >
                <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                    <path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                </svg>
            </div>
        ),
        
        <span className="mdc-chip__text">{text || children}</span>,

        tarilingIcon && React.cloneElement(tarilingIcon, {
            className: classnames('mdc-chip__icon mdc-chip__icon--leading')
        })
    );
}