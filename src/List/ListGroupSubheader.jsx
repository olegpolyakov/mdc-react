import React from 'react';
import classnames from 'classnames';

export default function ListGroupSubheader({ element = 'h3', title, className, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-list-group__subheader', className),
        ...props
    }, title || children);
}