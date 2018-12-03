import React from 'react';
import classnames from 'classnames';

import './index.scss';

FormField.displayName = 'MDCFormField';

export default function FormField({
    label,
    alignEnd = false,

    className,
    children,
    ...props
}) {
    const classNames = classnames('mdc-form-field', {
        'mdc-form-field--align-end': alignEnd
    }, className)

    return (
        <div className={classNames} {...props}>
            {children}

            <label className="mdc-form-field__label">{label}</label>
        </div>
    );
}