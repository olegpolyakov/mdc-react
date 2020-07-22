import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default forwardRef(List);

function List({
    dense = false,
    textualList = false,
    avatarList = false,
    iconList = false,
    imageList = false,
    thumbnailList = false,
    videoList = false,
    twoLine = false,

    element: Element = 'ul',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-list', {
        'mdc-list--dense': dense,
        'mdc-list--textual-list': textualList,
        'mdc-list--avatar-list': avatarList,
        'mdc-list--icon-list': iconList,
        'mdc-list--image-list': imageList,
        'mdc-list--thumbnail-list': thumbnailList,
        'mdc-list--video-list': videoList,
        'mdc-list--two-line': twoLine
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

List.displayName = 'MDCList';

List.propTypes = {
    dense: PropTypes.bool,
    textualList: PropTypes.bool,
    avatarList: PropTypes.bool,
    iconList: PropTypes.bool,
    imageList: PropTypes.bool,
    thumbnailList: PropTypes.bool,
    videoList: PropTypes.bool,
    twoLine: PropTypes.bool
};