import React from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
    componentWillMount() {
        this.root = document.createElement('div');

        // this.root.style.top = 0;
        // this.root.style.left = 0;
        // this.root.style.right = 0;
        // this.root.style.bottom = 0;
        // this.root.style.zIndex = 1000;
        // this.root.style.position = 'fixed';

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