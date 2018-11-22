import React from 'react';
import classnames from 'classnames';

export default function HelperText({ element = 'p', persistent, validation, children, ...props }) {
    return React.createElement(element, {
        className: classnames('mdc-select-helper-text', {
            'mdc-select-helper-text--persistent': persistent,
            'mdc-select-helper-text--validation-msg': validation
        }),
        ...props
    }, children);
};