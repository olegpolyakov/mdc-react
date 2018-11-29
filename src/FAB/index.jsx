import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function FAB({
    icon,
    label,
    mini = false,
    extended = false,
    exited = false,
    disabled = false,
    
    element = 'button',
    component = element,
    className,
    children = label,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-fab', {
        'mdc-fab--mini': mini,
        'mdc-fab--extended': extended,
        'mdc-fab--exited': exited
    }, className);

    return (
        <Element className={classNames} {...props}>
            {icon &&
                React.cloneElement(icon, { className: 'mdc-fab__icon' })
            }

            {children &&
                <span className="mdc-fab__label">{children}</span>
            }
        </Element>
    );
}