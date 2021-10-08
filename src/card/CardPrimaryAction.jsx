import { forwardRef } from 'react';
import classnames from 'classnames';

import { cssClasses } from './constants';

const CardPrimaryAction = forwardRef(({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.PRIMARY_ACTION, className);

    return (
        <Element ref={ref} className={classNames} tabIndex="0" {...props}>
            {children}

            <div className={cssClasses.RIPPLE} />
        </Element>
    );
});

CardPrimaryAction.displayName = 'MDCCardPrimaryAction';

export default CardPrimaryAction;