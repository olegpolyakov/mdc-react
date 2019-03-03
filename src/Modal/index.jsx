import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    static displayName = 'MDCModal';

    static propTypes = {
        element: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        element: 'div'
    };

    componentWillMount() {
        this.root = document.createElement(this.props.element);
        
        this.root.classList = 'mdc-modal';

        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.root
        );
    }
}