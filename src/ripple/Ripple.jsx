import { useEffect, useRef } from 'react';
import { MDCRipple } from '@material/ripple';
import classnames from 'classnames';

export default function Ripple({
    unbounded = false,
    disabled = false,
    className,
    element: Element = 'span',
    ...props
}) {
    const rootRef = useRef();
    const rippleRef = useRef();

    useEffect(() => {
        if (disabled) return;

        if (!rippleRef.current) {
            rippleRef.current = new MDCRipple(rootRef.current.parentNode);
        }

        rippleRef.current.unbounded = unbounded;

        return () => rippleRef.current.destroy();
    }, [disabled, unbounded]);

    const classNames = classnames(className);

    return (
        <Element
            ref={rootRef}
            className={classNames}
            {...props}
        />
    );
}

Ripple.displayName = 'MDCRipple';