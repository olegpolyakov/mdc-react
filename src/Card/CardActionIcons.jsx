import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(CardActionIcons);

function CardActionIcons({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__action-icons', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    className: 'mdc-card__action mdc-card__action--icon'
                })
            )}
        </Element>
    );
}

CardActionIcons.displayName = 'MDCCardActionIcons';