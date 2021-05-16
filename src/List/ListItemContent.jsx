import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(ListItemContent);

function ListItemContent({
    overlineText,
    primaryText,
    secondaryText,

    element = 'span',
    component: Element = element,
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-list-item__content', className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {overlineText &&
                (React.isValidElement(overlineText) ?
                    React.cloneElement(overlineText, {
                        className: classnames('mdc-list-item__overline-text', overlineText.props.className)
                    })
                    :
                    <span className="mdc-list-item__overline-text">{overlineText}</span>
                )
            }

            {primaryText &&
                (React.isValidElement(primaryText) ?
                    React.cloneElement(primaryText, {
                        className: classnames('mdc-list-item__primary-text', primaryText.props.className)
                    })
                    :
                    <span className="mdc-list-item__primary-text">{primaryText}</span>
                )
            }

            {secondaryText &&
                (React.isValidElement(secondaryText) ?
                    React.cloneElement(secondaryText, {
                        className: classnames('mdc-list-item__secondary-text', secondaryText.props.className)
                    })
                    :
                    <span className="mdc-list-item__secondary-text">{secondaryText}</span>
                )
            }

            {children}
        </Element>
    );
}

ListItemContent.displayName = 'MDCListItemContent';

ListItemContent.propTypes = {
    text: PropTypes.node,
    overline: PropTypes.node,
    primary: PropTypes.node,
    secondary: PropTypes.node
};