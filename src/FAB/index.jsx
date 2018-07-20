import React from 'react';
import classnames from 'classnames';

import './index.scss';

FAB.defaultProps = {
    element: 'button',
    mini: false,
    extended: false,
    disabled: false
};

// FAB.propTypes = {
//     className: PropTypes.string,
//     icon: PropTypes.string,
//     mini: PropTypes.bool,
//     plain: PropTypes.bool,
//     disabled: PropTypes.bool
// };

export default function FAB({
    element,
    component = element,
    icon,
    mini,
    extended,
    disabled,
    className,
    children,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-fab', {
            'mdc-fab--mini': mini,
            'mdc-fab--extended': extended
        }, className),
        ...props
    },
        React.cloneElement(icon || React.Children.only(children), {
            className: 'mdc-fab__icon'
        })
    );
}