import React from 'react';
import classnames from 'classnames';

import IconButton from '../IconButton/IconButton';

export default React.forwardRef(TopAppBarNavigationIcon);

function TopAppBarNavigationIcon({ className, ...props }, ref) {
    const classNames = classnames('mdc-top-app-bar__action-item', className);

    return (
        <IconButton ref={ref} className={classNames} {...props} />
    );
}

TopAppBarNavigationIcon.displayName = 'MDCTopAppBarNavigationIcon';