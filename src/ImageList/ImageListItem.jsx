import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ImageListItem);

function ImageListItem({
    src,
    label,

    element: Element = 'li',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-image-list__item', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className="mdc-image-list__image-aspect-container">
                <img className="mdc-image-list__image" src={src} alt={label} />
            </div>

            {label &&
                <div className="mdc-image-list__supporting">
                    <span className="mdc-image-list__label">{label}</span>
                </div>
            }
        </Element>
    );
}

ImageListItem.displayName = 'MDCImageListItem';

ImageListItem.propTypes = {
    src: PropTypes.string,
    label: PropTypes.string
};