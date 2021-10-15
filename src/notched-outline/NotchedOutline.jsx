import { forwardRef, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getClientWidth } from '../utils';

import { numbers, cssClasses } from './constants';

const NotchedOutline = forwardRef(({
    notched = false,

    className,
    children,
    ...props
}, ref) => {
    const notchRef = useRef();

    useLayoutEffect(() => {
        const notch = notchRef.current;
        const floatingLabel = notch?.firstChild;

        if (!notch || !floatingLabel) return;

        const width = getClientWidth(floatingLabel);

        if (notched) {
            notchRef.current.style.width = `${width * numbers.NOTCH_SIZE_FACTOR + numbers.NOTCH_PADDING_RIGHT}px`;
        } else {
            notchRef.current.style.width = 'auto';
        }
    }, [notched]);

    const classNames = classnames(cssClasses.ROOT, cssClasses.UPGRADED, {
        [cssClasses.NOTCHED]: notched,
        [cssClasses.NO_LABEL]: !children
    }, className);

    return (
        <span ref={ref} className={classNames} {...props}>
            <span className={cssClasses.LEADING} />

            {children &&
                <span ref={notchRef} className={cssClasses.NOTCH}>
                    {children}
                </span>
            }

            <span className={cssClasses.TRAILING} />
        </span>
    );
});

NotchedOutline.displayName = 'MDCNotchedOutline';

NotchedOutline.propTypes = {
    notched: PropTypes.bool
};

export default NotchedOutline;