import React from 'react';
import classnames from 'classnames';

ImageListItem.displayName = 'MDCImageListItem';

export default function ImageListItem({
    src,
    label,

    element: Element = 'li',
    className
}) {
    const classNames = classnames('mdc-image-list__item', className);

    return (
        <Element
            className={classnames}
        >
            <img class="mdc-image-list__image" src={src} alt={label} />

            {label &&
                <div className="mdc-image-list__supporting">
                    <span className="mdc-image-list__label">{label}</span>
                </div>
            }
        </Element>
    );
}