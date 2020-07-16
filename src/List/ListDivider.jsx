import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ListDivider({
    inset,

    element: Element = 'li',
    className,
    ...props
}) {
    const classNames = classnames('mdc-list-divider', {
        [`mdc-list-divider--inset-${inset}`]: inset
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
    inset: PropTypes.oneOf(['leading', 'trailing', 'padding'])
};