import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function HelperText({
    persistent = false,
    validation = false,

    ...props
}) {
    const classNames = classnames('mdc-text-field-helper-text', {
        'mdc-text-field-helper-text--persistent': persistent,
        'mdc-text-field-helper-text--validation-msg': validation
    });

    return (
        <div className="mdc-text-field-helper-line">
            <p className={classNames} {...props} />
        </div>
    );
}

HelperText.displayName = 'MDCTextFieldHelperText';

HelperText.propTypes = {
    persistent: PropTypes.bool,
    validation: PropTypes.bool
};