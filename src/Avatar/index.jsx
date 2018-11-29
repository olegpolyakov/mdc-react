import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function Avatar({
    src,
    small = false,
    large = false,
    
    element = 'div',
    component = element,
    className,
    children,
    ...props
}) {
    const Element = component;
    const classNames = classnames('mdc-avatar', {
        'mdc-avatar--small': small,
        'mdc-avatar--large': large
    }, className);

    return (
        <Element className={classNames} {...props}>
            {src ?
                <img src={src} className="mdc-avatar__image" />
                :
                React.isValidElement(children) ?
                    React.cloneElement(children, {
                        className: 'mdc-avatar__icon'
                    })
                    :
                    <span className="mdc-avatar__text">{children}</span>
            }
        </Element>
    );
};