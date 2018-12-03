import React from 'react';
import classnames from 'classnames';

HelperText.displayName = 'MDCSelectHelperText';

export default function HelperText({
    persistent = false,
    validation = false,

    element: Element = 'p',
    children,
    ...props
}) {
    const classNames = classnames('mdc-select-helper-text', {
        'mdc-select-helper-text--persistent': persistent,
        'mdc-select-helper-text--validation-msg': validation
    });

    return (
        <Element className={classNames} {...props} />
    );
};