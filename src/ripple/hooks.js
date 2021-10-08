import { useEffect, useRef } from 'react';
import { MDCRipple } from '@material/ripple';

export function useRipple(rootRef, unbounded = false) {
    const rippleRef = useRef();

    useEffect(() => {
        if (!rippleRef.current) {
            rippleRef.current = new MDCRipple(rootRef.current);
        }

        rippleRef.current.unbounded = unbounded;

        return () => rippleRef.current.destroy();
    }, [rootRef, unbounded]);

    return rippleRef.current;
}