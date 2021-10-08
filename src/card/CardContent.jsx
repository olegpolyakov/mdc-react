import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const CardContent = forwardRef(({
    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.CONTENT, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

CardContent.displayName = 'MDCCardContent';

export default CardContent;