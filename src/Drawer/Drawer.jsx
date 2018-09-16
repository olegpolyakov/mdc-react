import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import './index.scss';

import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';

export default class Drawer extends React.Component {
    static defaultProps = {
        open: false,
        dismissible: false,
        modal: false,
        onClose: Function.prototype,
        element: 'aside'
    };

    static Header = DrawerHeader;
    static Content = DrawerContent;

    componentDidUpdate(prevProps) {
        if (this.props.modal) {
            if (this.props.open === true && prevProps.open === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
                document.body.classList.add('mdc-drawer-scroll-lock');
            } else if (this.props.open === false && prevProps.open === true) {
                document.removeEventListener('keydown', this.handleDocumentKeyDown);
                document.body.classList.remove('mdc-drawer-scroll-lock');
            }
        }
    }

    handleDocumentKeyDown = event => {
        if (event.key && event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    };

    handleScrimClick = event => {
        this.props.onClose();
    };

    render() {
        const {
            open,
            dismissible,
            modal,
            title,
            subtitle,
            position,
            onClose,

            element,
            component = element,
            className,
            children,
            ...props
        } = this.props;

        return React.createElement(Transition, {
            timeout: 200,
            in: open
        },
            state => React.createElement(React.Fragment, null,
                React.createElement(element, {
                    ref: element => this.root = element,
                    className: classnames('mdc-drawer', {
                        'mdc-drawer--dismissible': dismissible,
                        'mdc-drawer--modal': modal,
                        'mdc-drawer--open': open,
                        [`mdc-drawer--position-${position}`]: position
                    }, className),
                    onTransitionEnd: this.handleTransitionEnd
                },
                    title && React.createElement(DrawerHeader, { title, subtitle }),

                    React.createElement(DrawerContent, null, children)
                ),

                modal && React.createElement('div', {
                    ref: element => this.scrim = element,
                    className: 'mdc-drawer-scrim',
                    onClick: this.handleScrimClick
                })
            )
        );
    }
}