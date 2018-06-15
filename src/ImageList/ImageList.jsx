import React from 'react';
import classnames from 'classnames';

export default class ImageList extends React.Component {
    static defaultProps = {
        element: 'ul',
        masonry: false
    };

    render() {
        const { element, masonry, children, ...props } = this.props;

        return React.createElement(element, {
            className: classnames('mdc-image-list', {
                'mdc-image-list--masonry': masonry
            }),
            ...props
        }, children);
    }
}