import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

export default class Dialog extends React.Component {
    static defaultProps = {
        element: 'div',
        open: false,
        confirmation: false,
        onClose: Function.prototype
    };

    shouldComponentUpdate(nextProps) {
        return this.props.open !== nextProps.open;
    }

    componentDidUpdate() {
        if (this.props.open === true) {
            document.body.classList.add('mdc-dialog-scroll-lock');
            
            if (this.props.confirmation === false) {
                document.addEventListener('keydown', this.handleDocumentKeyDown);
            }
        } else if (this.props.open === false) {
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

    handleBackdropClick = event => {
        if (this.props.confirmation) return;

        this.props.onClose();
    }

    render() {
        const { element, open, className, children, confirmation, ...props } = this.props;

        return (
            <Transition timeout={200} in={open} appear={true}>
                {status =>
                    React.createElement(element,
                        {
                            className: classnames('mdc-dialog', {
                                'mdc-dialog--open': open,
                                'mdc-dialog--animating': status === 'entering' || status === 'exiting'
                            }, className),
                            role: 'alertdialog',
                            ...props
                        },
                
                        React.createElement('div', { className: 'mdc-dialog__surface' }, children),
                
                        React.createElement('div', {
                            className: 'mdc-dialog__backdrop',
                            onClick: this.handleBackdropClick
                        })
                    )
                }
            </Transition>
        ); 
    }
}