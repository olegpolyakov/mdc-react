import React from 'react';
import classnames from 'classnames';

export default class PermanentDrawer extends React.Component {
    render() {
        const { element = 'aside', toolbarSpacer, className, children, ...props } = this.props;

        return React.createElement(element, {
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