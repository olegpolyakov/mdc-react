import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { useCreated, useMounted } from '../lifecycle-hooks';

export default function Modal({ fixed = false, element = 'div', children }) {
    const root = React.useRef();

    useCreated(() => {
        root.current = document.createElement(element);
        root.current.className = 'mdc-modal';

        if (fixed) {
            root.current.classList.add('mdc-modal--fixed');
        }
    });

    useMounted(() => {
        document.body.appendChild(root.current);

        return () => document.body.removeChild(root.current);
    });
    
    return ReactDOM.createPortal(children, root.current);
}

Modal.displayName = 'MDCModal';

Modal.propTypes = {
    fixed: PropTypes.bool,
    element: PropTypes.string,
    children: PropTypes.node.isRequired
};