import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(FormField);

function FormField({
    label,
    alignEnd = false,
    nowrap = false,

    element: Element = 'label',
    className,
    children,
    ...props
}, ref) {
    const classNames = classnames('mdc-form-field', {
        'mdc-form-field--align-end': alignEnd,
        'mdc-form-field--nowrap': nowrap
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}

            {label &&
                <span className="mdc-form-field__label">{label}</span>
            }
        </Element>
    );
}

FormField.displayName = 'MDCFormField';

FormField.propTypes = {
    label: PropTypes.string,
    alignEnd: PropTypes.bool
};