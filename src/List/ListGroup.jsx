import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListGroupSubheader from './ListGroupSubheader';

export default React.forwardRef(ListGroup);

function ListGroup({
    subheader,

    element: Element = 'div',
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-group', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {subheader &&
                <ListGroupSubheader>{subheader}</ListGroupSubheader>
            }

            {children}
        </Element>
    );
}

ListGroup.displayName = 'MDCListGroup';

ListGroup.propTypes = {
    subheader: PropTypes.node
};

ListGroup.Subheader = ListGroupSubheader;