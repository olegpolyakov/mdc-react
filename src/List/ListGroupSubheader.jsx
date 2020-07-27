import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ListGroupSubheader);

function ListGroupSubheader({
    title,

    element: Element = 'h3',
    className,
    children = title,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-group__subheader', className);

    return (
        <Element ref={ref} className={classNames} {...props}>{children}</Element>
    );
}

ListGroupSubheader.displayName = 'MDCListGroupSubheader';

ListGroupSubheader.propTypes = {
    title: PropTypes.string
};