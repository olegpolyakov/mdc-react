import React from 'react';
import classnames from 'classnames';

export default function ListItem({
    element = 'li',
    component = element,
    selected,
    activated,
    className,
    children,
    ...props
}) {
    return React.createElement(component,
        {
            className: classnames('mdc-list-item', {
                'mdc-list-item--selected': selected,
                'mdc-list-item--activated': activated
            }, className),
            ...props
        },
        children
    );
}