import React from 'react';
import classnames from 'classnames';

export default class PermanentDrawer extends React.Component {
    static defaultProps = {
        element: 'aside'
    };

    render() {
        const { element, component = element, toolbarSpacer, open, className, children, ...props } = this.props;

        return React.createElement(component, {
            className: classnames(className, 'mdc-drawer--permanent'),
            ...props
        },
            toolbarSpacer && React.createElement('div', { className: 'mdc-drawer__toolbar-spacer' }),

            React.createElement('div', {
                className: 'mdc-drawer__content'
            }, children)
        );
    }
}