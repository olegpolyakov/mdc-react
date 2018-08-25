import React from 'react';
import classnames from 'classnames';

export default class Icon extends React.Component {
    static defaultProps = {
        dark: false,
        light: false,
        inactive: false,

        element: 'i'
    };

    render() {
        const {
            size,
            dark,
            light,
            inactive,
        
            element,
            component = element,
            className,
            ...props
        } = this.props;

        return (
            React.createElement(component, {
                className: classnames('mdc-icon', 'material-icons', {
                    [`md-${size}`]: size,
                    'md-dark': dark,
                    'md-light': light,
                    'md-inactive': inactive
                }, className),
                ...props
            })
        );
    }
}