import { forwardRef } from 'react';
import classnames from 'classnames';

import { listGroupCssClasses as cssClasses } from './constants';

const ListGroup = forwardRef(({
    element: Element = 'div',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

ListGroup.displayName = 'MDCListGroup';

export default ListGroup;