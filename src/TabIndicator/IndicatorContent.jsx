import React from 'react';
import classnames from 'classnames';

export default class IndicatorContent extends React.Component {
    get clientRect() {
        return this.root && this.root.getBoundingClientRect();
    }

    render() {
        const { underline, style, onTransitionEnd } = this.props;
        
        return React.createElement('span', {
            ref: element => this.root = element,
            className: classnames('mdc-tab-indicator__content', {
                'mdc-tab-indicator__content--underline': underline
            }),
            onTransitionEnd,
            style
        });
    }
}