import React from 'react';
import classnames from 'classnames';

import Menu from './Menu';

export default class MenuAnchor extends React.Component {
    static defaultProps = {
        element: 'div'
    };

    render() {
        const { element, className, children, ...props } = this.props;
        
        return React.createElement(element, {
            ref: element => this.root = element,
            className: classnames(className, 'mdc-menu-anchor'),
            ...props
        }, React.Children.map(children, child => {
            if (child.type !== Menu) return child;
            
            return React.cloneElement(child, {
                anchor: this.root
            });
        }));
    }
}