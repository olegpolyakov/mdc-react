import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const CardMedia = forwardRef(({
    imageUrl,
    content,
    square = false,
    wide = false,

    element = 'div',
    component: Element = element,
    className,
    children = content,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.MEDIA, {
        [cssClasses.MEDIA_SQUARE]: square,
        [cssClasses.MEDIA_WIDE]: wide,
    }, className);

    const style = imageUrl ? {
        backgroundImage: `url(${imageUrl})`
    } : undefined;

    return (
        <Element ref={ref} className={classNames} style={style} {...props}>
            {children &&
                <div className={cssClasses.MEDIA_CONTENT}>{children}</div>
            }
        </Element>
    );
});

CardMedia.displayName = 'MDCCardMedia';

CardMedia.propTypes = {
    imageUrl: PropTypes.string,
    content: PropTypes.node,
    square: PropTypes.bool,
    wide: PropTypes.bool
};

export default CardMedia;