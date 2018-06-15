import React from 'react';
import classnames from 'classnames';

import Button from '../Button';

export default function DialogButton({ element, action, cancel, accept, ...props }) {
    return React.createElement(Button, {
        className: classnames('mdc-dialog__footer__button', {
            'mdc-dialog__action': action,
            'mdc-dialog__footer__button--cancel': cancel,
            'mdc-dialog__footer__button--accept': accept
        }),
        ...props
    });
};