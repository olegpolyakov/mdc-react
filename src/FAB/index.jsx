import React from 'react';
import classnames from 'classnames';

import './index.scss';

FAB.defaultProps = {
    element: 'button',
    mini: false,
    extended: false,
    exited: false,
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
    label,
    mini,
    extended,
    exited,
    disabled,
    className,
    children = label,
    ...props
}) {
    return React.createElement(component, {
        className: classnames('mdc-fab', {
            'mdc-fab--mini': mini,
            'mdc-fab--extended': extended,
            'mdc-fab--exited': exited
        }, className),
        ...props
    },
        React.cloneElement(icon, {
            className: 'mdc-fab__icon'
        }),

        children && React.createElement('span', {
            className: 'mdc-fab__label'
        }, children)
    );
}