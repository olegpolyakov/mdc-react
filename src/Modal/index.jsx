import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    componentWillMount() {
        this.root = document.createElement('div');
        
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