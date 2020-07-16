import React from 'react';
import PropTypes from 'prop-types';

export default function DrawerHeader({
    graphic,
    title,
    subtitle,

    children,
    ...props
}) {
    return (
        <div className="mdc-drawer__header" {...props}>
            {graphic &&
                React.cloneElement(graphic, {
                    className: 'mdc-drawer__graphic'
                })
            }

            {title && (React.isValidElement(title) ?
                React.cloneElement(title, {
                    className: 'mdc-drawer__title'
                })
                :
                <h3 className="mdc-drawer__title">{title}</h3>
            )}

            {subtitle && (React.isValidElement(subtitle) ?
                React.cloneElement(subtitle, {
                    className: 'mdc-drawer__subtitle'
                })
                :
                <h6 className="mdc-drawer__subtitle">{subtitle}</h6>
            )}

            {children}
        </div>
    );
}

DrawerHeader.displayName = 'MDCDrawerHeader';

DrawerHeader.propTypes = {
    graphic: PropTypes.element,
    title: PropTypes.node,
    subtitle: PropTypes.node
};