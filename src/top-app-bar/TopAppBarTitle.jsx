import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const TopAppBarTitle = forwardRef(({
    element: Element = 'span',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.TITLE, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

TopAppBarTitle.displayName = 'MDCTopAppBarTitle';

export default TopAppBarTitle;