import React from 'react';
import classnames from 'classnames';

export default React.forwardRef(CardActionButtons);

function CardActionButtons({
    element = 'div',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__action-buttons', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {React.Children.map(children, child =>
                React.cloneElement(child, {
                    className: classnames('mdc-card__action mdc-card__action--button', child.props.className)
                })
            )}
        </Element>
    );
}

CardActionButtons.displayName = 'MDCCardActionButtons';