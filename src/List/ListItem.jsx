import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ListItemGraphic from './ListItemGraphic';
import ListItemText from './ListItemText';
import ListItemMeta from './ListItemMeta';

export default function ListItem({
    graphic,
    text,
    primaryText,
    secondaryText,
    meta,
    activated = false,
    selected = false,
    disabled = false,

    element = 'li',
    component: Element = element,
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-list-item', {
        'mdc-list-item--activated': activated,
        'mdc-list-item--selected': selected,
        'mdc-list-item--disabled': disabled
    }, className);

    return (
        <Element className={classNames} {...props}>
            <span className="mdc-list-item__ripple" />

            {graphic &&
                <ListItemGraphic>{graphic}</ListItemGraphic>
            }

            {(text || primaryText || secondaryText) &&
                <ListItemText
                    text={text}
                    primary={primaryText}
                    secondary={secondaryText}
                />
            }

            {meta &&
                <ListItemMeta>{meta}</ListItemMeta>
            }

            {children}
        </Element>
    );
}

ListItem.displayName = 'MDCListItem';

ListItem.propTypes = {
    graphic: PropTypes.element,
    text: PropTypes.node,
    primaryText: PropTypes.node,
    secondaryText: PropTypes.node,
    meta: PropTypes.node,
    activated: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
};

ListItem.Graphic = ListItemGraphic;
ListItem.Text = ListItemText;
ListItem.Meta = ListItemMeta;