import React from 'react';
import PropTypes from 'prop-types';

export default function ListItemText({
    primary,
    secondary,

    element = 'span',
    component: Element = element,
    children,
    ...props
}) {
    return (
        <Element className="mdc-list-item__text" {...props}>
            {primary &&
                (React.isValidElement(primary) ?
                    React.cloneElement(primary, { className: 'mdc-list-item__primary-text' })
                    :
                    <span className="mdc-list-item__primary-text">{primary}</span>
                )
            }

            {secondary &&
                (React.isValidElement(secondary) ?
                    React.cloneElement(secondary, { className: 'mdc-list-item__secondary-text' })
                    :
                    <span className="mdc-list-item__secondary-text">{secondary}</span>
                )
            }

            {children}
        </Element>
    );
}

ListItemText.displayName = 'MDCListItemText';

ListItemText.propTypes = {
    primary: PropTypes.node,
    secondary: PropTypes.node
};