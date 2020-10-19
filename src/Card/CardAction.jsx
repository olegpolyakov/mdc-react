import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function CardAction({
    button = false,
    icon = false,

    component,
    className,
    children = component,
    ...props
}) {
    return (
        React.cloneElement(children, {
            className: classnames('mdc-card__action', {
                'mdc-card__action--button': button,
                'mdc-card__action--icon': icon
            }, children.props.className),
            ...props
        })
    );
}

CardAction.displayName = 'MDCCardAction';

CardAction.propTypes = {
    button: PropTypes.bool,
    icon: PropTypes.bool
};