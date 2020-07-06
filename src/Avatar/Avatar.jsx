import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Avatar({
    src,
    icon,
    text,
    small = false,
    large = false,

    element = 'span',
    component: Element = element,
    className,
    alt,
    children = icon || text,
    ...props
}) {
    const classNames = classnames('mdc-avatar', {
        'mdc-avatar--small': small,
        'mdc-avatar--large': large
    }, className);

    return (
        <Element className={classNames} {...props}>
            {src ?
                <img className="mdc-avatar__image" src={src} alt={alt} />
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
    icon: PropTypes.element,
    text: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool
};