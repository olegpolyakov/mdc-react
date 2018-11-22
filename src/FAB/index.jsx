import React from 'react';
import classnames from 'classnames';

import './index.scss';

FAB.defaultProps = {
    element: 'button',
    mini: false,
    extended: false,
    exited: false,
    disabled: false
};

export default function FAB({
    icon,
    label,
    mini,
    extended,
    exited,
    disabled,
    
    element,
    component = element,
    className,
    children = label,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-fab', {
            'mdc-fab--mini': mini,
            'mdc-fab--extended': extended,
            'mdc-fab--exited': exited
        }, className),
        ...props
    },
        icon && React.cloneElement(icon, {
            className: 'mdc-fab__icon'
        }),

        children && React.createElement('span', {
            className: 'mdc-fab__label'
        }, children)
    );
}