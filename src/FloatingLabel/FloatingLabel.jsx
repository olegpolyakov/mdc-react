import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FloatingLabel = React.forwardRef(({ float = false, className, ...props }, ref) => {
    const rootElement = React.useRef();

    const classNames =  classnames('mdc-floating-label', {
        'mdc-floating-label--float-above': float
    }, className);

    React.useImperativeHandle(ref, () => ({
        width: rootElement.current ? rootElement.current.offsetWidth : 0
    }));

    return (
        <label
            ref={rootElement}
            className={classNames}
            {...props}
        />
    );
});

FloatingLabel.displayName = 'MDCFloatingLabel';

FloatingLabel.propTypes = {
    float: PropTypes.bool
};

export default FloatingLabel;