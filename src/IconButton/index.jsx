import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class IconButton extends React.Component {
    static defaultProps = {
        element: 'button',
        on: false,
        onClick: Function.prototype
    };

    componentDidUpdate() {
        this.root.blur();
    }

    handleClick = event => {
        this.root.blur();
        this.props.onClick(event);
    }

    render() {
        let { element, on, onIcon, offIcon, onLabel, offLabel, className, children, onClick, ...props } = this.props;
        
        return React.createElement(element,
            {
                ref: element => this.root = element,
                className: classnames('mdc-icon-button material-icons', className),
                title: on ? offLabel : onLabel,
                role: element !== 'button' ? 'button' : undefined,
                onClick: this.handleClick,
                ...props
            },
            children || (on ? onIcon : offIcon)
        );
    }
}