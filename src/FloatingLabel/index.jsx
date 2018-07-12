import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class FloatingLabel extends React.Component {
    static defaultProps = {
        element: 'label',
        float: false
    };

    get width() {
        return this.root ? this.root.offsetWidth : 0;
    }

    render() {
        const { element, float, className, children, ...props } = this.props;

        return React.createElement(element, {
            ref: element => this.root = element,
            className: classnames('mdc-floating-label', {
                'mdc-floating-label--float-above': float
            }),
            ...props
        }, children);
    }
}