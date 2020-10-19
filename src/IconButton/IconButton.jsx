import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(IconButton);

function IconButton({
    icon,

    element = 'button',
    component: Element = element,
    className,
    children = icon,
    ...props
}, ref) {
    const classNames = classnames('mdc-icon-button', {
        'material-icons': typeof children === 'string'
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {React.isValidElement(children) ?
                React.cloneElement(children, {
                    className: classnames('mdc-icon-button__icon', children.props.className)
                })
                :
                children
            }
        </Element>
    );
}

IconButton.displayName = 'MDCIconButton';

IconButton.propTypes = {
    icon: PropTypes.element
};