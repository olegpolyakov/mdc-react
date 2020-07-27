import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(CardPrimaryAction);

function CardPrimaryAction({
    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__primary-action', className);

    return (
        <Element ref={ref} className={classNames} tabIndex="0" {...props} />
    );
}

CardPrimaryAction.displayName = 'MDCCardPrimaryAction';