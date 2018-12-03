import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import './index.scss';

import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';

export default class Drawer extends React.Component {
    static displayName = 'MDCDrawer';

    static defaultProps = {
        open: false,
        dismissible: false,
        modal: false,

        onClose: Function.prototype
    };

    static Header = DrawerHeader;
    static Content = DrawerContent;

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

            element = 'aside',
            component: Element = element,
            className,
            children,
            ...props
        } = this.props;

        const classNames = classnames('mdc-drawer', {
            'mdc-drawer--dismissible': dismissible,
            'mdc-drawer--modal': modal,
            'mdc-drawer--open': open
        }, className);

        return (
            <Transition
                in={open}
                timeout={200}
                classNames={{
                    enter: 'mdc-drawer--opening',
                    enterActive: 'mdc-drawer--animate',
                    enterDone: 'mdc-drawer--open',
                    exit: 'mdc-drawer--closing'
                }}
            >
                <React.Fragment>
                    <Element
                        className={classNames}
                        ref={element => this.rootElement = element}
                        {...props}
                    >
                        {title && <DrawerHeader title={title} subtitle={subtitle} />}

                        <DrawerContent>
                            {children}
                        </DrawerContent>
                    </Element>

                    {modal &&
                        <div
                            className="mdc-drawer-scrim"
                            ref={element => this.scrimElement = element}
                            onClick={this.handleScrimClick}
                        />
                    }
                </React.Fragment>
            </Transition>
        );
    }
}