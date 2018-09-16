import React from 'react';
import classnames from 'classnames';

export default class DataTable extends React.Component {
    static defaultProps = {
        selectable: false
    };

    render() {
        const { selectable, className, children, ...props } = this.props;

        return React.createElement('table', {
            className: classnames('mdc-data-table', {
                'mdc-data-table--selectable': selectable
            }, className),
            ...props
        }, children);
    }
}