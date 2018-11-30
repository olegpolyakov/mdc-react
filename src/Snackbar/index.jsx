import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Snackbar extends React.Component {
    static defaultProps = {
        active: false,
        timeout: 2750,
        alignStart: false,
        multiline: false,
        actionOnBottom: false,

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
        const {
            active,
            timeout,
            text,
            icon,
            action,
            alignStart,
            multiline,
            actionOnBottom,

            className,
            children = text,
            onClose,
            ...props
        } = this.props;

        const classNames = classnames('mdc-snackbar', {
            'mdc-snackbar--active': active,
            'mdc-snackbar--align-start': alignStart,
            'mdc-snackbar--multiline': multiline,
            'mdc-snackbar--action-on-bottom': actionOnBottom
        }, className);

        return (
            <div className={classNames} {...props}>
                {icon && React.cloneElement(icon, { className: 'mdc-snackbar__icon' })}

                <div className="mdc-snackbar__text">{children}</div>

                
                {action &&
                    <div className="mdc-snackbar__action-wrapper">
                        {React.cloneElement(action, {
                            className: 'mdc-snackbar__action-button',
                            onClick: this.handleActionClick
                        })}
                    </div>
                }
            </div>
        );
    }
}