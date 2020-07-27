import React, { useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(NotchedOutline);

function NotchedOutline({
    notched = false,

    className,
    children,
    ...props
}, ref) {
    const notchRef = useRef();

    useLayoutEffect(() => {
        if (!notchRef.current) return;

        if (notched) {
            const { width } = notchRef.current.getBoundingClientRect();
            notchRef.current.style.width = `${(width + 2) * 0.75}px`;
        } else {
            notchRef.current.style.width = 'auto';
        }
    }, [notched]);

    const classNames = classnames('mdc-notched-outline', 'mdc-notched-outline--upgraded', {
        'mdc-notched-outline--notched': notched,
        'mdc-notched-outline--no-label': !children
    }, className);

    return (
        <span ref={ref} className={classNames} {...props}>
            <span className="mdc-notched-outline__leading" />

            {children &&
                <span ref={notchRef} className="mdc-notched-outline__notch">
                    {children}
                </span>
            }

            <span className="mdc-notched-outline__trailing" />
        </span>
    );
}

NotchedOutline.displayName = 'MDCNotchedOutline';

NotchedOutline.propTypes = {
    notched: PropTypes.bool,
    width: PropTypes.number
};