import { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { useCreated, useMounted } from '../lifecycle-hooks';

export default function Modal({
    fixed = false,
    element = 'div',
    children
}) {
    const rootRef = useRef();

    useCreated(() => {
        rootRef.current = document.createElement(element);
        rootRef.current.className = 'mdc-modal';

        if (fixed) {
            rootRef.current.classList.add('mdc-modal--fixed');
        }
    });

    useMounted(() => {
        const activeElement = document.activeElement;

        document.body.appendChild(rootRef.current);
        rootRef.current.firstChild.focus();

        return () => {
            rootRef.current.firstChild.blur();
            activeElement.focus();
            document.body.removeChild(rootRef.current);
        };
    });

    return ReactDOM.createPortal(children, rootRef.current);
}

Modal.displayName = 'MDCModal';

Modal.propTypes = {
    fixed: PropTypes.bool,
    element: PropTypes.string,
    children: PropTypes.node.isRequired
};