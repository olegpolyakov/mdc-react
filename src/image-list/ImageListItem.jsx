import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const ImageListItem = forwardRef(({
    imageSrc,
    label,
    fixedAspect = true,

    element: Element = 'li',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.IMAGE_LIST_ITEM, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {fixedAspect ?
                <div className={cssClasses.IMAGE_LIST_IMAGE_ASPECT_CONTAINER}>
                    <img className={cssClasses.IMAGE_LIST_IMAGE} src={imageSrc} alt={label} />
                </div>
                :
                <img className={cssClasses.IMAGE_LIST_IMAGE} src={imageSrc} alt={label} />
            }

            {label &&
                <div className={cssClasses.IMAGE_LIST_SUPPORTING}>
                    <span className={cssClasses.IMAGE_LIST_LABEL}>{label}</span>
                </div>
            }
        </Element>
    );
});

ImageListItem.displayName = 'MDCImageListItem';

ImageListItem.propTypes = {
    imageSrc: PropTypes.string,
    label: PropTypes.node,
    fixedAspect: PropTypes.bool
};

export default ImageListItem;