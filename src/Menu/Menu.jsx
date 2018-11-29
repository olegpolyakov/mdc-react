import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classnames from 'classnames';

import Modal from '../Modal';
import { List } from '../List';

export default class Menu extends React.Component {
    static defaultProps = {
        open: false,
        
        onClose: Function.prototype,

        element: 'div'
    };

    setStyle() {
        if (this._style) return this._style;
        if (!this.root || !this.props.anchor) return;

        const { anchor, top, left, bottom, right } = this.props;
        const { clientWidth: width, clientHeight: height } = this.root;
        const anchorDimensions = anchor.getBoundingClientRect();
        const style = {
            position: 'absolute',
            transformOrigin: ''
        };
        
        if (left || !right) {
            const left = anchorDimensions.left;
            const right = left + width;
            const delta = window.innerWidth - right;

            style.left = `${delta > 0 ? left : left - Math.abs(delta)}px`;
            style.transformOrigin += 'left';
        } else if (right) {
            const left = anchorDimensions.right - width;

            style.left = `${left > 0 ? left : 0}px`;
            style.transformOrigin += 'right';
        }

        if (top || !bottom) {
            const top = anchorDimensions.top;
            const bottom = top + height
            const delta = window.innerHeight - bottom;
            
            style.top = `${delta > 0 ? top : top - Math.abs(delta)}px`;
            style.transformOrigin += ' top';
        } else if (bottom) {
            const top = anchorDimensions.bottom - height;
            
            style.top = `${top > 0 ? top : 0}px`;
            style.transformOrigin += ' bottom';
        }

        this.root.style.left = style.left;
        this.root.style.top = style.top;
        this.root.style.position = style.position;
        this.root.style.transformOrigin = style.transformOrigin;
    }

    shouldComponentUpdate(nextProps) {
        return this.props.open !== nextProps.open;
    }

    componentDidUpdate(prevProps) {
        if (this.props.open === true && prevProps.open === false) {
            document.body.addEventListener('click', this.handleBodyClick);
            this.setStyle();
        } else if (this.props.open === false && prevProps.open === true) {
            document.body.removeEventListener('click', this.handleBodyClick);
        }
    }

    handleBodyClick = event => this.props.onClose();

    render() {
        const { open, anchor, top, left, bottom, right, element, children, className, ...props } = this.props;
        
        return (
            <CSSTransition
                in={open}
                timeout={{ enter: 120, exit: 75 }}
                classNames={{
                    enter: 'mdc-menu-surface--animating-open',
                    enterActive: 'mdc-menu-surface--open',
                    enterDone: 'mdc-menu-surface--open',
                    exit: 'mdc-menu-surface--animating-closed'
                }}
                mountOnEnter
                unmountOnExit
            >
                <Modal>
                    <div
                        className="mdc-menu-surface"
                        ref={element => this.root = element}
                    >
                        <div
                            className={classnames('mdc-menu', className)}
                            tabIndex={open ? '0' : '-1'}
                            {...props}
                        >
                            <List role="menu" aria-hidden="true">
                                {children}
                            </List>
                        </div>
                    </div>
                </Modal>
            </CSSTransition>
        );
    }
}