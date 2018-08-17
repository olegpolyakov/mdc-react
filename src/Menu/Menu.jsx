import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import { List } from '../List';

export default class Menu extends React.Component {
    static defaultProps = {
        open: false,
        
        onSelect: () => {},
        onCancel: () => {},

        element: 'div'
    };

    get style() {
        if (this._style) return this._style;
        
        if (!this.props.anchor) return {};

        const { anchor, top, left, bottom, right } = this.props;
        const anchorDimensions = anchor.getBoundingClientRect();
        
        const style = {
            top: null,
            left: null,
            transformOrigin: ''
        };

        if (left || !right) {
            const delta = anchorDimensions.left + this.width;

            style.left = delta > window.innerWidth ? (window.innerWidth - delta) : 0;
            style.transformOrigin += 'left';
        } else if (right) {
            const delta = anchorDimensions.right - this.width;

            style.left = delta < 0 ? (anchor.offsetWidth - this.width) - delta : anchor.offsetWidth - this.width;
            style.transformOrigin += 'right';
        }

        if (top || !bottom) {
            const delta = anchorDimensions.top + this.height;

            style.top = delta > window.innerHeight ? (window.innerHeight - delta) : 0;
            style.transformOrigin += ' top';
        } else if (bottom) {
            const delta = anchorDimensions.bottom - this.height;

            style.top = delta < 0 ? (anchor.offsetHeight - this.height) - delta : anchor.offsetHeight - this.height;
            style.transformOrigin += ' bottom';
        }

        style.width = this.width;

        return style;
    }

    componentDidMount() {
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;
        this.root.style.position = 'absolute';
    }

    shouldComponentUpdate(nextProps) {
        return this.props.open !== nextProps.open;
    }

    componentDidUpdate() {
        if (this.props.open === true) {
            document.body.addEventListener('click', this.handleBodyClick);
        } else if (this.props.open === false) {
            document.body.removeEventListener('click', this.handleBodyClick);
        }
    }

    handleBodyClick = event => this.props.onClose();

    render() {
        const { open, top, right, bottom, left, anchor, element, children, className, ...props } = this.props;
        
        return React.createElement(element, {
            className: classnames('mdc-menu', {
                'mdc-menu--open': open
            }),
            tabIndex: open ? '0' : '-1',
            ref: element => this.root = element,
            style: this.style,
            ...props
        },
            React.createElement(List, {
                className: 'menu__items',
                role: 'menu',
                'aria-hidden': "true"
            }, children)
        );
    }
}