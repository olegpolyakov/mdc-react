import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default function FormField({ element = 'div', label, alignEnd, children }) {
    return React.createElement(element, {
        className: classnames('mdc-form-field', {
            'mdc-form-field--align-end': alignEnd
        })
    },
        children,
        React.createElement('label', { className: 'mdc-form-field__label' }, label)
    );
}