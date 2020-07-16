import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

HelperText.displayName = 'MDCSelectHelperText';

HelperText.propTypes = {
    persistent: PropTypes.bool,
    validation: PropTypes.bool
};

export default function HelperText({
    validation = false,
    persistent = false,

    element: Element = 'p',
    children,
    ...props
}) {
    const classNames = classnames('mdc-select-helper-text', {
        'mdc-select-helper-text--validation-msg': validation,
        'mdc-select-helper-text--validation-msg-persistent': persistent
    });

    return (
        <Element className={classNames} {...props} />
    );
};