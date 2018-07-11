import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class IconButton extends React.Component {
    static defaultProps = {
        element: 'button',
        on: false,
        onClick: Function.prototype
    };

    handleClick = event => {
        this.props.onClick(event);
    }

    render() {
        const { element, on, onIcon, offIcon, onLabel, offLabel, className, children, onClick, ...props } = this.props;

        const commonProps = {
            element,
            className: classnames('mdc-icon-button', className),
            role: element !== 'button' ? 'button' : undefined,
            onClick: this.handleClick,
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