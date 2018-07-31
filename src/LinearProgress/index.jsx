import React from 'react';
import classnames from 'classnames';

export default class LinearProgress extends React.Component {
    static defaultProps = {
        element: 'div',
        value: 0,
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
        const { element, value, buffer, indeterminate, reversed, closed, className, ...props } = this.props;

        return React.createElement(element, {
            role: 'progressbar',
            className: classnames('mdc-linear-progress', {
                'mdc-linear-progress--indeterminate': indeterminate,
                'mdc-linear-progress--reversed': reversed,
                'mdc-linear-progress--closed': closed
            }, className),
            ...props
        },
            <div className="mdc-linear-progress__buffering-dots"></div>,

            <div className="mdc-linear-progress__buffer" style={{ transform: buffer ? `scaleX(${indeterminate ? 1 : buffer * 0.01})` : null }}></div>,

            <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar" style={{ transform: `scaleX(${indeterminate ? 1 : value * 0.01})` }}>
                <span className="mdc-linear-progress__bar-inner"></span>
            </div>,

            <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span className="mdc-linear-progress__bar-inner"></span>
            </div>
        );
    }
}