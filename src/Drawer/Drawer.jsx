import React from 'react';
import classnames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';

import './index.scss';

export default class Drawer extends React.Component {
    static displayName = 'MDCDrawer';

    static defaultProps = {
        open: false,
        appear: false,
        dismissible: false,
        modal: false,

        onClose: Function.prototype
    };

    componentDidMount() {
        if (this.props.dismissible) {
            if (this.props.appContentSelector) {
                document.querySelector(this.props.appContentSelector).classList.add('mdc-drawer-app-content');
            } else {
                this.rootElement.nextElementSibling.classList.add('mdc-drawer-app-content');
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.modal) {
            if (this.props.open === true && prevProps.open === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
            } else if (this.props.open === false && prevProps.open === true) {
                document.removeEventListener('keydown', this.handleDocumentKeyDown);
            }
        }
    }

    handleDocumentKeyDown = event => {
        if (event.key && event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    };

    handleScrimClick = event => this.props.onClose();

    render() {
        const {
            open,
            appear,
            dismissible,
            modal,
            onClose,

            element = 'aside',
            component: Element = element,
            className,
            children,
            ...props
        } = this.props;

        const classNames = classnames('mdc-drawer', {
            'mdc-drawer--dismissible': dismissible,
            'mdc-drawer--modal': modal
        }, className);

        return (
            <CSSTransition
                in={open}
                appear={appear}
                timeout={{
                    enter: 250,
                    exit: 200
                }}
                classNames={{
                    appear: 'mdc-drawer--open',
                    enter: 'mdc-drawer--open mdc-drawer--animate',
                    enterActive: 'mdc-drawer--open mdc-drawer--opening',
                    enterDone: 'mdc-drawer--open',
                    exit: 'mdc-drawer--open mdc-drawer--closing',
                    exitActive: 'mdc-drawer--closing'
                }}
            >
                <React.Fragment>
                    <Element
                        className={classNames}
                        ref={element => this.rootElement = element}
                        {...props}
                    >
                        {children}
                    </Element>

                    {modal &&
                        <div
                            className="mdc-drawer-scrim"
                            ref={element => this.scrimElement = element}
                            onClick={this.handleScrimClick}
                        />
                    }
                </React.Fragment>
            </CSSTransition>
        );
    }
}