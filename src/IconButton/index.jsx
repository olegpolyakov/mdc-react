import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class IconButton extends React.Component {
    static defaultProps = {
        on: false,
        onClick: Function.prototype,

        element: 'button'
    };

    render() {
        const {
            on,
            onIcon,
            offIcon,
            onLabel,
            offLabel,
            
            element,
            component = element,
            className,
            children,
            ...props
        } = this.props;

        const commonProps = {
            component,
            className: classnames('mdc-icon-button', className),
            role: element !== 'button' ? 'button' : undefined,
            ...props
        };

        if (React.isValidElement(children)) {
            return React.cloneElement(children, commonProps);
        } else {
            return React.cloneElement((on ? onIcon : offIcon), {
                ...commonProps,
                title: on ? onLabel : offLabel
            });
        }
    }
}