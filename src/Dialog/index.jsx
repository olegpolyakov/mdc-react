import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classnames from 'classnames';

import Modal from '../Modal';

import './index.scss';

export default class Dialog extends React.Component {
    static defaultProps = {
        open: false,
        confirmation: false,

        onClose: Function.prototype
    };

    componentDidUpdate(prevProps) {
        if (this.props.open === true && prevProps.open === false) {
            document.body.classList.add('mdc-dialog-scroll-lock');
            
            if (this.props.confirmation === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
            }
        } else if (this.props.open === false && prevProps.open === true) {
            document.body.classList.remove('mdc-dialog-scroll-lock');
            
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
        const { open, confirmation, title, actions, className, children, ...props } = this.props;

        return (
            <CSSTransition
                in={open}
                timeout={{enter: 150, exit: 75}}
                classNames={{
                    enter: 'mdc-dialog--opening',
                    enterActive: 'mdc-dialog--open',
                    enterDone: 'mdc-dialog--open',
                    exit: 'mdc-dialog--closing'
                }}
                mountOnEnter
                unmountOnExit
            >
                <Modal>
                    <div className={classnames('mdc-dialog', className)} role="alertdialog" aria-modal="true" {...props}>
                        <div className="mdc-dialog__container">
                            <div className="mdc-dialog__surface">
                                {title &&
                                    <h2 className="mdc-dialog__title">{title}</h2>
                                }

                                <div className="mdc-dialog__content">{children}</div>

                                {actions &&
                                    <div className="mdc-dialog__actions">
                                        {React.Children.map(actions, action =>
                                            React.cloneElement(action, { className: 'mdc-dialog__button' })
                                        )}
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="mdc-dialog__scrim" onClick={this.handleScrimClick} />
                    </div>
                </Modal>
            </CSSTransition>
        ); 
    }
}