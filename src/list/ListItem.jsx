import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import Icon from '../icon';

import { listItemCssClasses as cssClasses } from './constants';
import ListItemContent from './ListItemContent';
import ListItemEnd from './ListItemEnd';
import ListItemStart from './ListItemStart';

const ListItem = forwardRef(({
    start,
    content,
    end,
    text,
    overlineText,
    primaryText = text,
    secondaryText,
    icon,
    image,
    thumbnail,
    video,
    leadingIcon = icon,
    leadingImage = image,
    leadingThumbnail = thumbnail,
    leadingVideo = video,
    leadingCheckbox,
    leadingRadio,
    leadingSwitch,
    meta,
    trailingMeta = meta,
    trailingIcon,
    trailingCheckbox,
    trailingRadio,
    trailingSwitch,
    activated = false,
    selected = false,
    disabled = false,
    nonInteractive = false,
    withLeadingIcon = Boolean(leadingIcon),
    withLeadingImage = Boolean(leadingImage),
    withLeadingThumbnail = Boolean(leadingThumbnail),
    withLeadingVideo = Boolean(leadingVideo),
    withLeadingCheckbox = Boolean(leadingCheckbox),
    withLeadingRadio = Boolean(leadingRadio),
    withLeadingSwitch = Boolean(leadingSwitch),
    withTrailingMeta = Boolean(trailingMeta),
    withTrailingIcon = Boolean(trailingIcon),
    withTrailingCheckbox = Boolean(trailingCheckbox),
    withTrailingRadio = Boolean(trailingRadio),
    withTrailingSwitch = Boolean(trailingSwitch),

    element = 'li',
    component: Element = element,
    className,
    children,
    ...props
}, ref) => {
    const lines = Boolean(overlineText) + Boolean(primaryText) + Boolean(secondaryText);
    const hasStart = Boolean(
        start || leadingIcon || leadingImage || leadingThumbnail ||
        leadingVideo || leadingCheckbox || leadingRadio || leadingSwitch
    );
    const hasContent = Boolean(content || overlineText || primaryText || secondaryText);
    const hasEnd = Boolean(
        end || trailingMeta || trailingIcon ||
        trailingCheckbox || trailingRadio || trailingSwitch
    );

    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ACTIVATED]: activated,
        [cssClasses.SELECTED]: selected,
        [cssClasses.DISABLED]: disabled,
        [cssClasses.ONE_LINE]: lines === 1,
        [cssClasses.TWO_LINES]: lines === 2,
        [cssClasses.THREE_LINES]: lines === 3,
        [cssClasses.NON_INTERACTIVE]: nonInteractive,
        [cssClasses.OVERLINE]: overlineText,
        [cssClasses.LEADING_ICON]: withLeadingIcon,
        [cssClasses.LEADING_IMAGE]: withLeadingImage,
        [cssClasses.LEADING_THUMBNAIL]: withLeadingThumbnail,
        [cssClasses.LEADING_VIDEO]: withLeadingVideo,
        [cssClasses.LEADING_CHECKBOX]: withLeadingCheckbox,
        [cssClasses.LEADING_RADIO]: withLeadingRadio,
        [cssClasses.LEADING_SWITCH]: withLeadingSwitch,
        [cssClasses.TRAILING_ICON]: withTrailingIcon,
        [cssClasses.TRAILING_META]: withTrailingMeta,
        [cssClasses.TRAILING_CHECKBOX]: withTrailingCheckbox,
        [cssClasses.TRAILING_RADIO]: withTrailingRadio,
        [cssClasses.TRAILING_SWITCH]: withTrailingSwitch
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <span className={cssClasses.RIPPLE} />

            {hasStart &&
                <ListItemStart>
                    {start}
                    {leadingIcon &&
                        <Clone
                            component={leadingIcon}
                            fallback={Icon}
                        />
                    }
                    {leadingImage}
                    {leadingThumbnail}
                    {leadingVideo}
                    {leadingCheckbox}
                    {leadingRadio}
                    {leadingSwitch}
                </ListItemStart>
            }

            {hasContent &&
                <ListItemContent
                    overlineText={overlineText}
                    primaryText={primaryText}
                    secondaryText={secondaryText}
                >
                    {content}
                </ListItemContent>
            }

            {hasEnd &&
                <ListItemEnd>
                    {end}
                    {trailingMeta}
                    {trailingIcon &&
                        <Clone
                            component={trailingIcon}
                            fallback={Icon}
                        />
                    }
                    {trailingCheckbox}
                    {trailingRadio}
                    {trailingSwitch}
                </ListItemEnd>
            }

            {children}
        </Element>
    );
});

ListItem.displayName = 'MDCListItem';

ListItem.propTypes = {
    start: PropTypes.node,
    content: PropTypes.node,
    end: PropTypes.node,
    text: PropTypes.node,
    overlineText: PropTypes.node,
    primaryText: PropTypes.node,
    secondaryText: PropTypes.node,
    icon: PropTypes.node,
    image: PropTypes.element,
    thumbnail: PropTypes.element,
    video: PropTypes.element,
    leadingIcon: PropTypes.node,
    leadingImage: PropTypes.element,
    leadingThumbnail: PropTypes.element,
    leadingVideo: PropTypes.element,
    leadingCheckbox: PropTypes.element,
    leadingRadio: PropTypes.element,
    leadingSwitch: PropTypes.element,
    meta: PropTypes.node,
    trailingMeta: PropTypes.node,
    trailingIcon: PropTypes.node,
    trailingCheckbox: PropTypes.element,
    trailingRadio: PropTypes.element,
    trailingSwitch: PropTypes.element,
    activated: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    nonInteractive: PropTypes.bool,
    withLeadingIcon: PropTypes.bool,
    withLeadingImage: PropTypes.bool,
    withLeadingThumbnail: PropTypes.bool,
    withLeadingVideo: PropTypes.bool,
    withLeadingCheckbox: PropTypes.bool,
    withLeadingRadio: PropTypes.bool,
    withLeadingSwitch: PropTypes.bool,
    withTrailingMeta: PropTypes.bool,
    withTrailingIcon: PropTypes.bool,
    withTrailingCheckbox: PropTypes.bool,
    withTrailingRadio: PropTypes.bool,
    withTrailingSwitch: PropTypes.bool
};

export default ListItem;