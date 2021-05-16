import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListItemContent from './ListItemContent';
import ListItemEnd from './ListItemEnd';
import ListItemStart from './ListItemStart';

export default React.forwardRef(ListItem);

function ListItem({
    start,
    content,
    overlineText,
    primaryText,
    secondaryText,
    end,
    oneLine = true,
    twoLines = false,
    threeLines = false,
    activated = false,
    selected = false,
    disabled = false,
    nonInteractive = false,
    withLeadingIcon = false,
    withLeadingThumbnail = false,
    withLeadingImage = false,
    withLeadingVideo = false,
    withLeadingCheckbox = false,
    withLeadingRadio = false,
    withLeadingSwitch = false,
    withTrailingIcon = false,
    withTrailingMeta = false,
    withTrailingCheckbox = false,
    withTrailingRadio = false,
    withTrailingSwitch = false,

    element = 'li',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item', {
        'mdc-list-item--with-one-line': oneLine,
        'mdc-list-item--with-two-lines': twoLines,
        'mdc-list-item--with-three-lines': threeLines,
        'mdc-list-item--activated': activated,
        'mdc-list-item--selected': selected,
        'mdc-list-item--disabled': disabled,
        'mdc-list-item--non-interactive': nonInteractive,
        'mdc-list-item--with-leading-icon': withLeadingIcon,
        'mdc-list-item--with-leading-image': withLeadingImage,
        'mdc-list-item--with-leading-thumbnail': withLeadingThumbnail,
        'mdc-list-item--with-leading-video': withLeadingVideo,
        'mdc-list-item--with-leading-checkbox': withLeadingCheckbox,
        'mdc-list-item--with-leading-radio': withLeadingRadio,
        'mdc-list-item--with-leading-switch': withLeadingSwitch,
        'mdc-list-item--with-trailing-icon': withTrailingIcon,
        'mdc-list-item--with-trailing-meta': withTrailingMeta,
        'mdc-list-item--with-trailing-checkbox': withTrailingCheckbox,
        'mdc-list-item--with-trailing-radio': withTrailingRadio,
        'mdc-list-item--with-trailing-switch': withTrailingSwitch
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <span className="mdc-list-item__ripple" />

            {start &&
                <ListItemStart>{start}</ListItemStart>
            }

            {(content || overlineText || primaryText || secondaryText) &&
                <ListItemContent
                    overlineText={overlineText}
                    primaryText={primaryText}
                    secondaryText={secondaryText}
                >
                    {content}
                </ListItemContent>
            }

            {end &&
                <ListItemEnd>{end}</ListItemEnd>
            }

            {children}
        </Element>
    );
}

ListItem.displayName = 'MDCListItem';

ListItem.propTypes = {
    graphic: PropTypes.element,
    text: PropTypes.node,
    overlineText: PropTypes.node,
    primaryText: PropTypes.node,
    secondaryText: PropTypes.node,
    meta: PropTypes.node,
    activated: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
};