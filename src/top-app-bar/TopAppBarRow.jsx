import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const TopAppBarRow = forwardRef(({
    element: Element = 'div',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROW, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

TopAppBarRow.displayName = 'MDCTopAppBarRow';

export default TopAppBarRow;