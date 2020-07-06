import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default forwardRef(FloatingLabel);

function FloatingLabel({
    float = false,

    className, ...props
}, ref) {
    const rootElement = useRef();

    useImperativeHandle(ref, () => ({
        width: rootElement.current ? rootElement.current.offsetWidth : 0
    }));

    const classNames = classnames('mdc-floating-label', {
        'mdc-floating-label--float-above': float
    }, className);

    return (
        <span
            ref={rootElement}
            className={classNames}
            {...props}
        />
    );
}

FloatingLabel.displayName = 'MDCFloatingLabel';

FloatingLabel.propTypes = {
    float: PropTypes.bool
};