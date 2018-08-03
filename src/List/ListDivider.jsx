import React from 'react';
import classnames from 'classnames';

export default function ListDivider({
    element = 'li',
    component = element,
    inset,
    padded,
    className,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-list-divider', {
            'mdc-list-divider--inset': inset,
            'mdc-list-divider--padded': padded,
        }, className),
        role: element === 'li' ? 'separator' : undefined,
        ...props
    });
};