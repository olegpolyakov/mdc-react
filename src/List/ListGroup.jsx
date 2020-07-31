import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ListGroup);

function ListGroup({
    element: Element = 'div',
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-group', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}
        </Element>
    );
}

ListGroup.displayName = 'MDCListGroup';