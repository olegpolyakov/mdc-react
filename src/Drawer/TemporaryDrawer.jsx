import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

export default class TemporaryDrawer extends React.PureComponent {
    static defaultProps = {
        element: 'aside',
        onClose: Function.prototype
    };
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.open === true && prevProps.open === false) {
            document.addEventListener('keydown', this.handleDocumentKeyDown);
            document.body.classList.add('mdc-drawer-scroll-lock');
        } else if (this.props.open === false && prevProps.open === true) {
            document.removeEventListener('keydown', this.handleDocumentKeyDown);
            document.body.classList.remove('mdc-drawer-scroll-lock');
        }
    }

    handleDocumentKeyDown = event => {
        if (event.key && event.key === 'Escape' || event.keyCode === 27) {
            this.props.onClose();
        }
    };

    handleClick = event => {
        if (event.target !== this.drawer) {
            this.props.onClose();
        }
    };

    render() {
        const { element, component = element, open, position, className, children, ...props } = this.props;

        return (
            <Transition timeout={200} in={open} appear={true}>
                {status =>
                    React.createElement(component, {
                        className: classnames(className, 'mdc-drawer--temporary', {
                            'mdc-drawer--open': open,
                            'mdc-drawer--animating': status === 'entering' || status === 'exiting',
                            [`mdc-drawer--position-${position}`]: position
                        }),
                        onClick: this.handleClick,
                        ...props
                    },
                        React.createElement('div', {
                            className: 'mdc-drawer__drawer',
                            ref: element => this.drawer = element
                        }, children)
                    )
                }
            </Transition>
        );
    }
}