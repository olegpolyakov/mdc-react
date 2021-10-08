import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { listDividerCssClasses as cssClasses } from './constants';

const ListDivider = forwardRef(({
    withLeadingText = false,
    withLeadingIcon = false,
    withLeadingImage = false,
    withLeadingThumbnail = false,
    withLeadingVideo = false,
    withLeadingCheckbox = false,
    withLeadingRadio = false,
    withLeadingSwitch = false,

    element: Element = 'li',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.LEADING_TEXT]: withLeadingText,
        [cssClasses.LEADING_ICON]: withLeadingIcon,
        [cssClasses.LEADING_IMAGE]: withLeadingImage,
        [cssClasses.LEADING_THUMBNAIL]: withLeadingThumbnail,
        [cssClasses.LEADING_VIDEO]: withLeadingVideo,
        [cssClasses.LEADING_CHECKBOX]: withLeadingCheckbox,
        [cssClasses.LEADING_RADIO]: withLeadingRadio,
        [cssClasses.LEADING_SWITCH]: withLeadingSwitch
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            role={Element === 'li' ? 'separator' : undefined}
            {...props}
        />
    );
});

ListDivider.displayName = 'MDCListDivider';

ListDivider.propTypes = {
    withLeadingText: PropTypes.bool,
    withLeadingIcon: PropTypes.bool,
    withLeadingImage: PropTypes.bool,
    withLeadingThumbnail: PropTypes.bool,
    withLeadingVideo: PropTypes.bool,
    withLeadingAvatar: PropTypes.bool,
    withLeadingCheckbox: PropTypes.bool,
    withLeadingSwitch: PropTypes.bool,
    withLeadingRadio: PropTypes.bool
};

export default ListDivider;