import { forwardRef } from 'react';
import classnames from 'classnames';
import { cssClasses } from './constants';

const TopAppBarActionItem = forwardRef(({
    element = 'span',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ACTION_ITEM, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

TopAppBarActionItem.displayName = 'MDCTopAppBarActionItem';

export default TopAppBarActionItem;