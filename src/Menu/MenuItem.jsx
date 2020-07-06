import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { ListItem } from '../List';

export default function MenuItem({
    selected = false,
    disabled = false,

    className,
    ...props
}) {
    const classNames = classnames({
        'mdc-menu-item--selected': selected
    }, className);

    return (
        <ListItem
            className={classNames}
            selected={selected}
            role="menuitem"
            tabIndex={disabled ? '-1' : undefined}
            {...props}
        />
    );
}

MenuItem.displayName = 'MDCMenuItem';

MenuItem.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool
};