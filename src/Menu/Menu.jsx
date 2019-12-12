import React from 'react';
import classnames from 'classnames';

import { List } from '../List';

export default function Menu({ className, ...props }) {
    const classNames = classnames('mdc-menu', className);

    return (
        <List
            className={classNames}
            role="menu"
            aria-hidden="true"
            {...props}
        />
    );
}

Menu.displayName = 'MDCMenu';