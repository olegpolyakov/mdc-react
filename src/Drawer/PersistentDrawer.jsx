import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

export default class PersistentDrawer extends React.Component {
    static defaultProps = {
        element: 'aside'
    };

    render() {
        const { element, component = element, open, position, className, children, ...props } = this.props;

        return (
            <Transition timeout={200} in={open} appear={true}>
                {status =>
                    React.createElement(component, {
                        className: classnames(className, 'mdc-drawer--persistent', {
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