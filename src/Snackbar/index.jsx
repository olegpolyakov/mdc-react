import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Snackbar extends React.Component {
    static defaultProps = {
        element: 'div',
        active: false,
        timeout: 2750,
        onClose: Function.prototype
    };

    handleActionClick = event => this.cancelTimeout();

    handleActionBlur = event => {};

    handleDocumentVisibilityChange = event => {};

    handleBodyClick = event => {};

    componentDidUpdate(prevProps) {
        if (this.props.active && !prevProps.active) {
            this.timeout = setTimeout(() => {
                this.cancelTimeout();
            }, this.props.timeout);
        }
    }

    cancelTimeout() {
        clearTimeout(this.timeout);
        this.props.onClose();
    }

    render() {
        const { element, active, timeout, text, actionText, action, icon, alignStart, multiline, actionOnBottom, className, children, onClose, ...props } = this.props;

        return React.createElement(element, {
            className: classnames('mdc-snackbar', {
                'mdc-snackbar--active': active,
                'mdc-snackbar--align-start': alignStart,
                'mdc-snackbar--multiline': multiline,
                'mdc-snackbar--action-on-bottom': actionOnBottom
            }, className),
            ...props
        },
            (icon && React.isValidElement(icon)) &&
                React.cloneElement(icon, {
                    className: 'mdc-snackbar__icon'
                }),

            React.createElement('div', {
                className: 'mdc-snackbar__text'
            }, text || children),

            (actionText || action) &&
                React.createElement('div', {
                    className: 'mdc-snackbar__action-wrapper'
                },
                    actionText &&
                        React.createElement('button', {
                            type: 'button',
                            className: 'mdc-snackbar__action-button',
                            onClick: this.handleActionClick
                        }, actionText),

                    action &&
                        React.cloneElement(action, {
                            className: 'mdc-snackbar__action-button',
                            onClick: this.handleActionClick
                        })
                )
        );
    }
}