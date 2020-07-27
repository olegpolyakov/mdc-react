import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(CardMedia);

function CardMedia({
    imageUrl,
    content,
    square = false,
    wide = false,

    element = 'div',
    component: Element = element,
    className,
    children = content,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__media', {
        'mdc-card__media--square': square,
        'mdc-card__media--16-9': wide,
    }, className);

    const style = imageUrl ? {
        backgroundImage: `url(${imageUrl})`
    } : undefined;

    return (
        <Element ref={ref} className={classNames} style={style} {...props}>
            {children
                && <div className="mdc-card__media-content">{children}</div>
            }
        </Element>
    );
}

CardMedia.displayName = 'MDCCardMedia';

CardMedia.propTypes = {
    imageUrl: PropTypes.string,
    content: PropTypes.node,
    square: PropTypes.bool,
    wide: PropTypes.bool
};