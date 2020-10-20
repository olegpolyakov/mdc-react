import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(DrawerHeader);

function DrawerHeader({
    graphic,
    title,
    subtitle,

    element: Element = 'header',
    children,
    ...props
}, ref) {
    return (
        <Element ref={ref} className="mdc-drawer__header" {...props}>
            {graphic &&
                React.cloneElement(graphic, {
                    className: classnames('mdc-drawer__graphic', graphic.props.className)
                })
            }

            {title && (React.isValidElement(title) ?
                React.cloneElement(title, {
                    className: classnames('mdc-drawer__title', title.props.className)
                })
                :
                <h3 className="mdc-drawer__title">{title}</h3>
            )}

            {subtitle && (React.isValidElement(subtitle) ?
                React.cloneElement(subtitle, {
                    className: classnames('mdc-drawer__subtitle', subtitle.props.className)
                })
                :
                <h6 className="mdc-drawer__subtitle">{subtitle}</h6>
            )}

            {children}
        </Element>
    );
}

DrawerHeader.displayName = 'MDCDrawerHeader';

DrawerHeader.propTypes = {
    graphic: PropTypes.element,
    title: PropTypes.node,
    subtitle: PropTypes.node
};