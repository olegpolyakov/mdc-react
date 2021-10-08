import { forwardRef, useLayoutEffect } from 'react';

import { cssClasses } from './constants';

const Input = forwardRef(({
    textarea,
    autoResize,
    element: Element = textarea ? 'textarea' : 'input',
    ...props
}, ref) => {
    useLayoutEffect(() => {
        if (!autoResize) return;

        const element = ref.current;

        function setHeight() {
            element.style.height = '1rem';
            element.style.height = `${element.scrollHeight}px`;
        }

        setHeight();

        element.addEventListener('input', setHeight);

        return () => element.removeEventListener('input', setHeight);
    }, [autoResize, ref]);

    return (
        <Element
            ref={ref}
            className={cssClasses.INPUT}
            {...props}
        />
    );
});

Input.displayName = 'MDCTextFieldInput';

export default Input;