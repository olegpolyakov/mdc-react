import React from 'react';
import classnames from 'classnames';

import IconButton from '../IconButton/IconButton';

export default function TopAppBarNavigationIcon({ className, ...props }) {
    const classNames = classnames('mdc-top-app-bar__action-item', className);

    return (
        <IconButton className={classNames} {...props} />
    );
}

TopAppBarNavigationIcon.displayName = 'MDCTopAppBarNavigationIcon';