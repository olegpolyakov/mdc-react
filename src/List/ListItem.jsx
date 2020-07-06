import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function ListItem({
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
            <span className="mdc-list-item__ripple"></span>
            {children}
        </Element>
    );
}

ListItem.displayName = 'MDCListItem';

ListItem.propTypes = {
    activated: PropTypes.bool,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
};