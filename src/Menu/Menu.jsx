import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import { List } from '../List';

export default class Menu extends React.Component {
    static defaultProps = {
        open: false,
        anchor: {},
        onSelect: () => {},
        onCancel: () => {}
    };

    get anchor() {
        return this.props.anchor || {};
    }

    get width() {
        return this.root ? this.root.offsetWidth : 0;
    }

    get height() {
        return this.root ? this.root.offsetHeight : 0;
    }

    get transformOrigin() {
        let { top, left, bottom, right } = this.props;

        if (!top || !bottom) {
            top = true;
        }
        
        if (!left || !right) {
            left = true;
        }

        return `${(top && 'top') || (bottom && 'bottom')} ${(left && 'left') || (right && 'right')}`;
    }

    get style() {
        let { anchor, top, left, bottom, right } = this.props;

        const style = {
            top: null,
            left: null,
            transformOrigin: ''
        };

        if (!anchor) return style;

        if (!top && !bottom) {
            top = true;
        }
        
        if (!left && !right) {
            left = true;
        }

        if (left) {
            if ((anchor.offsetLeft + this.width) <= window.innerWidth) {
                style.left = anchor.offsetLeft;
            } else {
                style.left = anchor.offsetLeft - ((anchor.offsetLeft + this.width) - window.innerWidth);
            }

            style.transformOrigin += 'left';
        } else if (right) {
            if (anchor.offsetLeft + anchor.offsetWidth - this.width >= window.screenLeft) {
                style.left = anchor.offsetLeft - (this.width - anchor.offsetWidth);
            } else {
                style.left = 0;
            }

            style.transformOrigin += 'right';
        }

        if (top) {
            if ((anchor.offsetTop + this.height) <= window.innerHeight) {
                style.top = anchor.offsetTop;
                style.transformOrigin += ' top';
            } else {
                style.top = anchor.offsetTop - ((anchor.offsetTop + this.height) - window.innerHeight);
                style.transformOrigin += ` ${(anchor.offsetTop + anchor.offsetHeight + this.height) - window.innerHeight}px`;
            }

        } else if (bottom) {
            if ((anchor.offsetTop + anchor.offsetHeight - this.height) >= window.pageYOffset) {
                style.top = anchor.offsetTop - (this.height - anchor.offsetHeight);
                style.transformOrigin += ' bottom';
            } else {
                style.top = window.pageYOffset;
                style.transformOrigin += ` ${pageYOffset + anchor.offsetTop}px`;
            }
        }
        
        return style;
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
        const { open, children } = this.props;

        return (
            <div
                className={classnames('mdc-menu', {
                    'mdc-menu--open': open,
                })}
                tabIndex="-1"
                ref={element => this.root = element}
                style={this.style}>
                <List className="mdc-menu__items" role="menu" aria-hidden="true">
                    {React.Children.map(children, (child) =>
                        React.cloneElement(child, { onClick: this.handleMenuItemClick })
                    )}
                </List>
            </div>
        );
    }
}