import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Avatar({
    src,
    small = false,
    large = false,
    text,
    
    element = 'div',
    component: Element = element,
    className,
    children = text,
    ...props
}) {
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

Avatar.displayName = 'MDCAvatar';

Avatar.propTypes = {
    src: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool
};