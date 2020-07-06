import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ListDivider({
    inset = false,
    padded = false,

    element: Element = 'li',
    className,
    ...props
}) {
    const classNames = classnames('mdc-list-divider', {
        'mdc-list-divider--padded': padded,
        'mdc-list-divider--inset': inset === true,
        'mdc-list-divider--inset-leading': inset === 'leading',
        'mdc-list-divider--inset-trailing': inset === 'trailing',
        'mdc-list-divider--inset-padding': inset === 'padding'
    }, className);

    return (
        <Element
            className={classNames}
            role={Element === 'li' ? 'separator' : undefined}
            {...props}
        />
    );
}

ListDivider.displayName = 'MDCListDivider';

ListDivider.propTypes = {
    padded: PropTypes.bool,
    inset: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ])
};