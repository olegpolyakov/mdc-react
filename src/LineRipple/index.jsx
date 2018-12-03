import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class LineRipple extends React.Component {
    static displayName = 'MDCLineRipple';

    static defaultProps = {
        active: false,
        center: undefined
    }

    state = {
        deactivating: false
    };

    componentDidUpdate(prevProps) {
        if (!this.props.active && prevProps.active) {
            this.setState({ deactivating: true });
        }
    }

    handleTransitionEnd = event => {
        if (event.propertyName === 'opacity') {
            if (this.state.deactivating) {
                this.setState({ deactivating: false });
            }
        }
    };

    render() {
        const { active, center, className } = this.props;
        const { deactivating } = this.state;

        const classNames = classnames('mdc-line-ripple', {
            'mdc-line-ripple--active': active || deactivating,
            'mdc-line-ripple--deactivating': deactivating
        }, className);

        const style = {
            transformOrigin: center ? `${center}px center` : undefined
        };
        
        return (
            <div
                className={classNames}
                style={style}
                onTransitionEnd={this.handleTransitionEnd}
            />
        );
    }
}