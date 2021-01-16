import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Avatar);

function Avatar({
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
}, ref) {
    const classNames = classnames('mdc-avatar', {
        'mdc-avatar--small': small,
        'mdc-avatar--large': large
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {src ?
                <img className="mdc-avatar__image" src={src} alt={alt} />
                :
                React.isValidElement(children) ?
                    React.cloneElement(children, {
                        className: classnames('mdc-avatar__icon', children.props.className)
                    })
                    :
                    <span className="mdc-avatar__text">{children}</span>
            }
        </Element>
    );
}

Avatar.displayName = 'MDCAvatar';

Avatar.propTypes = {
    src: PropTypes.string,
    icon: PropTypes.element,
    text: PropTypes.string,
    small: PropTypes.bool,
    large: PropTypes.bool
};