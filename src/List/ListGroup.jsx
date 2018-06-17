import React from 'react';
import classnames from 'classnames';

export default function ListGroup({ element = 'div', className, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-list-group', className),
        ...props
    }, children);
}