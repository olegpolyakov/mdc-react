import React from 'react';
import classnames from 'classnames';

import Menu from './Menu';

export default class MenuAnchor extends React.Component {
    static defaultProps = {
        wrap: false,

        element: 'div'
    };

    render() {
        const { wrap, element, children, ...props } = this.props;
        
        return React.Children.count() === 1 ? React.cloneElement(children, {
            className: classnames(children.props.className, 'mdc-anchor-menu')
        })
        :
        React.createElement(element, {
            ref: element => this.root = element,
            className: 'mdc-menu-anchor',
            ...props
        }, React.Children.map(children, child => {
            if (child.type !== Menu) return child;
            
            return React.cloneElement(child, {
                anchor: this.root
            });
        }))
    }
}