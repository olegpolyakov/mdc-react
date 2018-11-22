import React from 'react';
import classnames from 'classnames';

export default function HelperText({ element = 'p', persistent, error, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-text-field-helper-text', {
            'mdc-text-field-helper-text--persistent': persistent,
            'mdc-text-field-helper-text--validation-msg': error
        }),
        ...props
    }, children);
};