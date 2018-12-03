import React from 'react';
import classnames from 'classnames';

export default class TabIndicatorContent extends React.Component {
    static displayName = 'MDCTabIndicatorContent';

    static defaultProps = {
        underline: false,
        icon: false
    };

    get clientRect() {
        return this.root && this.root.getBoundingClientRect();
    }

    render() {
        const { underline, icon, ...props } = this.props;
        
        const classNames = classnames('mdc-tab-indicator__content', {
            'mdc-tab-indicator__content--underline': underline,
            'mdc-tab-indicator__content--icon': icon
        });

        return (
            <span
                ref={element => this.root = element}
                className={classNames}
                {...props}
            />
        );
    }
}