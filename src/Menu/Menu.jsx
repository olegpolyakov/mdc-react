import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import { List } from '../List';

export default class Menu extends React.Component {
    static defaultProps = {
        open: false,
        
        onSelect: () => {},
        onCancel: () => {}
    };

    get style() {
        if (this._style) return this._style;
        
        if (!this.anchor) return {};

        const anchor = this.anchor;
        const width = this.width;
        const height = this.height;
        const { top, left, bottom, right } = this.props;

        const style = {
            top: null,
            left: null,
            transformOrigin: ''
        };

        if (left || !right) {
            style.left = 0;
            style.transformOrigin += 'left';
        } else if (right) {
            style.left = anchor.offsetWidth - width;
            style.transformOrigin += 'right';
        }

        if (top || !bottom) {
            style.top = 0;
            style.transformOrigin += ' top';
        } else if (bottom) {
            style.top = anchor.offsetHeight - height;
            style.transformOrigin += ' bottom';
        }
        
        this._style = style;

        return this._style;
    }

    componentDidMount() {
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;
        this._style = this.style;
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
        const { open, trigger, top, right, bottom, left, children, ...props } = this.props;
        
        return (
            <div ref={element => this.anchor = element} className="mdc-menu-anchor">
                {trigger}

                <div
                    className={classnames('mdc-menu', {
                        'mdc-menu--open': open
                    })}
                    tabIndex="-1"
                    ref={element => this.root = element}
                    style={this.style}
                    {...props}>
                    <List className="mdc-menu__items" role="menu" aria-hidden="true">
                        {children}
                    </List>
                </div>
            </div>
        );
    }
}