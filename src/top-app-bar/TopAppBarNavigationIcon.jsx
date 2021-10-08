import { forwardRef } from 'react';
import classnames from 'classnames';

import IconButton from '../icon-button';

import { cssClasses } from './constants';

const TopAppBarNavigationIcon = forwardRef(({ className, ...props }, ref) => {
    const classNames = classnames(cssClasses.NAVIGATION_ICON, className);

    return (
        <IconButton ref={ref} className={classNames} {...props} />
    );
});

TopAppBarNavigationIcon.displayName = 'MDCTopAppBarNavigationIcon';

export default TopAppBarNavigationIcon;