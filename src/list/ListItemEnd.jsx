import { forwardRef } from 'react';
import classnames from 'classnames';

import { listItemCssClasses as cssClasses } from './constants';

const ListItemEnd = forwardRef(({
    element = 'span',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.END, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

ListItemEnd.displayName = 'MDCListItemEnd';

export default ListItemEnd;