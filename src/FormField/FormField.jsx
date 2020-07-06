import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function FormField({
    label,
    alignEnd = false,

    element: Element = 'label',
    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-form-field', {
        'mdc-form-field--align-end': alignEnd
    }, className);

    return (
        <Element className={classNames} {...props}>
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