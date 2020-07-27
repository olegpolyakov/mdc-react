import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListItem from '../List/ListItem';

export default React.forwardRef(MenuItem);

function MenuItem({
    selected = false,
    disabled = false,

    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-menu-item', {
        'mdc-menu-item--selected': selected
    }, className);

    return (
        <ListItem
            ref={ref}
            role="menuitem"
            className={classNames}
            selected={selected}
            disabled={disabled}
            data-disabled={disabled || undefined}
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