import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ListItemText);

function ListItemText({
    text,
    primary,
    secondary,

    element = 'span',
    component: Element = element,
    className,
    children = text,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item__text', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {primary &&
                (React.isValidElement(primary) ?
                    React.cloneElement(primary, {
                        className: classnames('mdc-list-item__primary-text', primary.props.className)
                    })
                    :
                    <span className="mdc-list-item__primary-text">{primary}</span>
                )
            }

            {secondary &&
                (React.isValidElement(secondary) ?
                    React.cloneElement(secondary, {
                        className: classnames('mdc-list-item__secondary-text', secondary.props.className)
                    })
                    :
                    <span className="mdc-list-item__secondary-text">{secondary}</span>
                )
            }

            {children}
        </Element>
    );
}

ListItemText.displayName = 'MDCListItemText';

ListItemText.propTypes = {
    text: PropTypes.node,
    primary: PropTypes.node,
    secondary: PropTypes.node
};