import React from 'react';

export default class ImageListItem extends React.Component {
    static defaultProps = {
        element: 'li'
    };

    render() {
        const { element, children, ...props } = this.props;

        return React.createElement(element, {
            className: classnames('mdc-image-list__item', {
                
            }),
            ...props
        }, children);
    }
}