import React from 'react';
import classnames from 'classnames';

export default function CardActionButtons({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-card__action-buttons', className);

    return (
        <Element className={classNames} {...props}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    className: 'mdc-card__action mdc-card__action--button'
                })
            )}
        </Element>
    );
}

CardActionButtons.displayName = 'MDCCardActionButtons';