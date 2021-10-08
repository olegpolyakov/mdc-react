import { forwardRef } from 'react';
import classnames from 'classnames';

import { listItemCssClasses as cssClasses } from './constants';

const ListItemStart = forwardRef(({
    element = 'span',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.START, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

ListItemStart.displayName = 'MDCListItemStart';

export default ListItemStart;