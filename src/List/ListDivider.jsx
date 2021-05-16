import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ListDivider);

function ListDivider({
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
}, ref) {
    const classNames = classnames('mdc-list-divider', {
        'mdc-list-divider--with-leading-icon': withLeadingIcon,
        'mdc-list-divider--with-leading-image': withLeadingImage,
        'mdc-list-divider--with-leading-thumbnail': withLeadingThumbnail,
        'mdc-list-divider--with-leading-video': withLeadingVideo,
        'mdc-list-divider--with-leading-checkbox': withLeadingCheckbox,
        'mdc-list-divider--with-leading-radio': withLeadingRadio,
        'mdc-list-divider--with-leading-switch': withLeadingSwitch
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            role={Element === 'li' ? 'separator' : undefined}
            {...props}
        />
    );
}

ListDivider.displayName = 'MDCListDivider';

ListDivider.propTypes = {
    inset: PropTypes.oneOf(['leading', 'trailing', 'padding'])
};