import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { cssClasses } from './constants';

export default function Modal({
    fixed = false,
    element = 'div',
    children
}) {
    const rootRef = useRef(document.createElement(element));

    useEffect(() => {
        const root = rootRef.current;
        const activeElement = document.activeElement;

        root.className = cssClasses.ROOT;

        if (fixed) {
            root.classList.add(cssClasses.FIXED);
        }

        document.body.appendChild(root);
        root.firstChild.focus();

        return () => {
            activeElement.focus();
            document.body.removeChild(root);
        };
    }, [fixed]);

    return createPortal(children, rootRef.current);
}

Modal.displayName = 'MDCModal';

Modal.propTypes = {
    fixed: PropTypes.bool,
    element: PropTypes.string,
    children: PropTypes.node.isRequired
};