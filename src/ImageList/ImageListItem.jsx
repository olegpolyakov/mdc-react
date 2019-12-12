import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ImageListItem({
    imageSrc,
    label,

    element: Element = 'li',
    className
}) {
    const classNames = classnames('mdc-image-list__item', className);

    return (
        <Element
            className={classNames}
        >
            <div className="mdc-image-list__image-aspect-container">
                <img className="mdc-image-list__image" src={imageSrc} alt={label} />
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