import React from 'react';
import classnames from 'classnames';
import Transition from 'react-transition-group/Transition';

import './index.scss';

export default class Snackbar extends React.Component {
    static defaultProps = {
        element: 'div',
        active: false,
        timeout: 2750,
        onClose: Function.prototype
    };

    handleActionClick = event => this.props.onClose();

    handleActionBlur = event => {};

    handleDocumentVisibilityChange = event => {};

    handleBodyClick = event => {};

    render() {
        const { element, active, timeout, text, actionText, action, alignStart, multiline, actionOnBottom, className, children, onClose, ...props } = this.props;

        return (
            <Transition in={active} timeout={{ enter: timeout, exit: 0 }} onEntered={onClose} appear>
                {state => 
                    React.createElement(element, {
                        className: classnames('mdc-snackbar', {
                            'mdc-snackbar--active': state === 'entering' || state === 'entered' || state === 'exiting',
                            'mdc-snackbar--align-start': alignStart,
                            'mdc-snackbar--multiline': multiline,
                            'mdc-snackbar--action-on-bottom': actionOnBottom
                        })
                    },
                        <div className="mdc-snackbar__text">{text || children}</div>,
    
                        (actionText || action) &&
                            <div className="mdc-snackbar__action-wrapper">
                                {actionText && React.createElement('button', { type: 'button', className: 'mdc-snackbar__action-button', onClick: this.handleActionClick }, actionText)}
                                {action && React.cloneElement(action, { className: 'mdc-snackbar__action-button', onClick: this.handleActionClick })}
                            </div>
                    )
                }
            </Transition>
        );
    }
}