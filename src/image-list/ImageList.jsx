import { Children, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { clone, create } from '../component';

import { cssClasses } from './constants';
import ImageListItem from './ImageListItem';

const ImageList = forwardRef(({
    items,
    masonry = false,
    withTextProtection = false,

    element: Element = 'ul',
    className,
    children = items?.map(item => create(ImageListItem, item)),
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.IMAGE_LIST, {
        [cssClasses.IMAGE_LIST_MASONRY]: masonry,
        [cssClasses.IMAGE_LIST_WITH_TEXT_PROTECTION]: withTextProtection
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {Children.map(children, child =>
                clone(child, {
                    fixedAspect: masonry ? false : undefined
                })
            )}
        </Element>
    );
});

ImageList.displayName = 'MDCImageList';

ImageList.propTypes = {
    items: PropTypes.array,
    masonry: PropTypes.bool,
    withTextProtection: PropTypes.bool
};

export default ImageList;