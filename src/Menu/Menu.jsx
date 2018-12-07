import React from 'react';
import classnames from 'classnames';

import MenuSurface from '../MenuSurface';
import { List } from '../List';

Menu.displayName = 'MDCMenu';

export default function Menu({ open, anchor, onClose, className, ...props }) {
    const classNames = classnames('mdc-menu', className);

    return (
        <MenuSurface
            open={open}
            anchor={anchor}
            onClose={onClose}
        >
            <List
                className={classNames}
                role="menu"
                aria-hidden="true"
                {...props}
            />
        </MenuSurface>
    );
}