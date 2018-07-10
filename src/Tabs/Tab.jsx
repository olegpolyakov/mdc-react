import React from 'react';
import classnames from 'classnames';

export default class Tab extends React.Component {
    static defaultProps = {
        element: 'div',
        preventDefault: true,
        onSelect: Function.prototype
    };

    static classes = {
        root: 'mdc-tab',
        active: 'mdc-tab--active'
    };

    get width() {
        return this.root.offsetWidth;
    }
    
    get left() {
        return this.root.offsetLeft;
    }

    handleClick = event => {
        if (this.props.preventDefault) {
            event.preventDefault();
        }

        this.props.onSelect(this.props.value);
    };

    handleKeyDown = event => {
        if (event.key && event.key === 'Enter' || event.keyCode === 13) {
            this.props.onSelect(this.props.value);
        }
    };

    render() {
        const { element, component = element, label, active, icon, value, preventDefault, className, ...props } = this.props;

        return React.createElement(component,
            {
                ref: element => this.root = element,
                className: classnames(Tab.classes.root, className, {
                    [Tab.classes.active]: active
                }),
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown,
                ...props
            },
            label
        );
    }
}