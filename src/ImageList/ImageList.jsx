import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ImageList);

function ImageList({
    masonry = false,
    withTextProtection = false,

    element: Element = 'ul',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-image-list', {
        'mdc-image-list--masonry': masonry,
        'mdc-image-list--with-text-protection': withTextProtection
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

ImageList.displayName = 'MDCImageList';

ImageList.propTypes = {
    masonry: PropTypes.bool,
    withTextProtection: PropTypes.bool
};