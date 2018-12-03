import React from 'react';
import classnames from 'classnames';

HelperText.displayName = 'MDCTextFieldHelperText';

export default function HelperText({
    persistent = false,
    validation = false,

    element: Element = 'p',
    children,
    ...props
}) {
    const classNames = classnames('mdc-text-field-helper-text', {
        'mdc-text-field-helper-text--persistent': persistent,
        'mdc-text-field-helper-text--validation-msg': validation
    });

    return (
        <Element className={classNames} {...props} />
    );
};