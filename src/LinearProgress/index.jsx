import React from 'react';
import classnames from 'classnames';

export default class LinearProgress extends React.Component {
    static defaultProps = {
        element: 'div',
        progress: 0,
        buffer: 0,
        indeterminate: false,
        reversed: false,
        closed: false
    };

    getStyle(scaleValue) {
        return {
            transform: `scaleX(${scaleValue})`
        };
    }

    render() {
        const { element, progress, buffer, indeterminate, reversed, closed, className } = this.props;

        return React.createElement(element, {
            role: 'progressbar',
            className: classnames('mdc-linear-progress', {
                'mdc-linear-progress--indeterminate': indeterminate,
                'mdc-linear-progress--reversed': reversed,
                'mdc-linear-progress--closed': closed
            }, className)
        },
            <div class="mdc-linear-progress__buffering-dots" style={{}}></div>,

            <div class="mdc-linear-progress__buffer" style={{ transform: `scaleX(${indeterminate ? 1 : buffer * 0.01})` }}></div>,

            <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ transform: `scaleX(${indeterminate ? 1 : progress * 0.01})` }}>
                <span class="mdc-linear-progress__bar-inner"></span>
            </div>,

            <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span class="mdc-linear-progress__bar-inner"></span>
            </div>
        );
    }
}