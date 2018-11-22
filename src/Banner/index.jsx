import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Banner({
    icon,
    text,
    action,
    persistent = false,

    element = 'div',
    component = element,
    className,
    children = text,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-banner', {
        'mdc-banner--persistent': persistent
    }, className);

    return (
        <Element className={classNames} {...props}>
            <div className="mdc-banner__content">
                {React.isValidElement(children) ?
                    React.cloneElement(children, { className: 'mdc-banner__text' })
                    :
                    <div className="mdc-banner__text">{children}</div>
                }

                {action && React.cloneElement(action, { className: 'mdc-banner__action' })}
            </div>
        </Element>
    );
};