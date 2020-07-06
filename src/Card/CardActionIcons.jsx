import React from 'react';
import classnames from 'classnames';

export default function CardActionIcons({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-card__action-icons', className);

    return (
        <Element className={classNames} {...props}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    className: 'mdc-card__action mdc-card__action--icon'
                })
            )}
        </Element>
    );
}

CardActionIcons.displayName = 'MDCCardActionIcons';