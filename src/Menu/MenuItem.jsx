import React from 'react';
import classnames from 'classnames';

import { ListItem } from '../List';

MenuItem.displayName = 'MDCMenuItem';

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
            role="menuitem"
            tabIndex={disabled ? '-1' : undefined}
            aria-disabled={disabled && 'true'}
            selected={selected}
            {...props}
        />
    );
}