import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classnames from 'classnames';

import Modal from '../Modal';

export default class Dialog extends React.Component {
    static displayName = 'MDCDialog';

    static propTypes = {
        open: PropTypes.bool,
        appear: PropTypes.bool,
        confirmation: PropTypes.bool,
        onClose: PropTypes.func
    };

    static defaultProps = {
        open: false,
        appear: false,
        confirmation: false,
        onClose: Function.prototype
    };
    
    static cssClasses = {
        OPEN: 'mdc-dialog--open',
        OPENING: 'mdc-dialog--opening',
        CLOSING: 'mdc-dialog--closing',
        SCROLLABLE: 'mdc-dialog--scrollable',
        STACKED: 'mdc-dialog--stacked',
        SCROLL_LOCK: 'mdc-dialog-scroll-lock'
    };

    get isScrollable() {
        return this.contentElement ? this.contentElement.scrollHeight > this.contentElement.offsetHeight : false;
    }

    get contentElement() {
        if (this._contentElement) return this._contentElement;

        if (this.rootElement) {
            this._contentElement = this.rootElement.querySelector('.mdc-dialog__content');
            
            return this._contentElement;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.open === true && prevProps.open === false) {
            document.body.classList.add(Dialog.cssClasses.SCROLL_LOCK);

            if (this.isScrollable) {
                this.rootElement.classList.add(Dialog.cssClasses.SCROLLABLE);
            } else {
                this.rootElement.classList.remove(Dialog.cssClasses.SCROLLABLE);
            }
            
            if (this.props.confirmation === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
            }
        } else if (this.props.open === false && prevProps.open === true) {
            document.body.classList.remove(Dialog.cssClasses.SCROLL_LOCK);
            
            if (this.props.confirmation === false) {
                document.removeEventListener('keydown', this.handleDocumentKeyDown);
            }
        }
    }

    handleDocumentKeyDown = event => {
        if (this.props.confirmation) return;

        if (event.key && event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    };

    handleScrimClick = event => {
        if (this.props.confirmation) return;

        this.props.onClose();
    }

    render() {
        const {
            open,
            appear,
            confirmation,
            title,

            element: Element = 'div',
            className,
            children,
            ...props
        } = this.props;

        const classNames = classnames('mdc-dialog', className);

        return (
            <CSSTransition
                in={open}
                timeout={{ enter: 150, exit: 75 }}
                classNames={{
                    appear: 'mdc-dialog--opening',
                    appearActive: 'mdc-dialog--open',
                    enter: 'mdc-dialog--opening',
                    enterActive: 'mdc-dialog--open',
                    enterDone: 'mdc-dialog--open',
                    exit: 'mdc-dialog--closing'
                }}
                appear={appear}
                mountOnEnter
                unmountOnExit
            >
                <Modal>
                    <Element
                        className={classNames}
                        ref={element => this.rootElement = element}
                        role="alertdialog"
                        aria-modal="true"
                        {...props}
                    >
                        <div className="mdc-dialog__container">
                            <div className="mdc-dialog__surface">
                                {children}
                            </div>
                        </div>

                        <div className="mdc-dialog__scrim" onClick={this.handleScrimClick} />
                    </Element>
                </Modal>
            </CSSTransition>
        ); 
    }
}