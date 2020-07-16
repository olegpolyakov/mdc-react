import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Badge({
    value,
    inset = false,
    noBackground = false,

    element: Element = 'span',
    className,
    ...props
}) {
    const classNames = classnames('mdc-badge', {
        'mdc-badge--inset': inset,
        'mdc-badge--no-background': noBackground
    }, className);

    return (
        <Element className={classNames} data-badge={value} {...props} />
    );
}

Badge.displayName = 'MDCBadge';

Badge.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    overlap: PropTypes.string,
    noBackground: PropTypes.bool
};