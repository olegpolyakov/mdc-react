import React from 'react';
import classnames from 'classnames';

function ChipLeadingIcon({ icon, filtered, selected }) {
    return typeof icon === 'string' ?
        React.createElement('i', {
            className: classnames('material-icons mdc-chip__icon mdc-chip__icon--leading', {
                'mdc-chip__icon--leading-hidden': filtered && selected
            })
        }, icon)
        :
        React.cloneElement(icon, {
            className: classnames('mdc-chip__icon mdc-chip__icon--leading', {
                'mdc-chip__icon--leading-hidden': filtered && selected
            })
        });
}

function TrailingIcon({ icon }) {
    return typeof icon === 'string' ?
        <i className="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabIndex="0" role="button">{icon}</i>
        :
        icon;
}

function ChipCheckmark() {
    return (
        <div className="mdc-chip__checkmark" >
            <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
                <path className="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
            </svg>
        </div>
    );
}

export default function Chip({ element = 'span', text, leadingIcon, tarilingIcon, filtered, selected, children, ...props }) {
    return React.createElement(
        element,

        {
            className: classnames('mdc-chip', {
                'mdc-chip--selected': selected
            }),
            ...props
        },

        leadingIcon && <ChipLeadingIcon icon={leadingIcon} filtered={filtered} selected={selected} />,

        filtered && <ChipCheckmark />,
        
        <span className="mdc-chip__text">{text || children}</span>,

        tarilingIcon && <TrailingIcon icon={tarilingIcon} filtered={filtered} selselected={selected} />
    );
}