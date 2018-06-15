import React from 'react';
import classnames from 'classnames';

export default class List extends React.Component {
    render() {
        let { element = 'ul', inset, dense, twoLine, avatarList, nonInteractive, className, children, ...props } = this.props;
    
        return React.createElement(element,
            {
                className: classnames('mdc-list', {
                    'mdc-list--inset': inset,
                    'mdc-list--dense': dense,
                    'mdc-list--two-line': twoLine,
                    'mdc-list--avatar-list': avatarList,
                    'mdc-list--non-interactive': nonInteractive
                }, className),
                ...props
            },
            children
        );
    }
}