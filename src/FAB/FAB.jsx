import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(FAB);

function FAB({
    icon,
    leadingIcon = icon,
    trailingIcon,
    label,
    mini = false,
    extended = false,
    exited = false,

    element = 'button',
    component: Element = element,
    className,
    children = label,
    ...props
}, ref) {
    const classNames = classnames('mdc-fab', {
        'mdc-fab--mini': mini,
        'mdc-fab--extended': label,
        'mdc-fab--exited': exited
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className="mdc-fab__ripple" />

            {leadingIcon &&
                React.cloneElement(leadingIcon, {
                    className: 'mdc-fab__icon'
                })
            }

            {children &&
                <span className="mdc-fab__label">{children}</span>
            }

            {trailingIcon &&
                React.cloneElement(trailingIcon, {
                    className: 'mdc-fab__icon'
                })
            }
        </Element>
    );
}

FAB.displayName = 'MDCFAB';

FAB.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    mini: PropTypes.bool,
    extended: PropTypes.bool,
    exited: PropTypes.bool
};