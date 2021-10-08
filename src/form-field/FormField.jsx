import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const FormField = forwardRef(({
    label,
    alignEnd = false,
    nowrap = false,
    spaceBetween = false,

    element: Element = 'div',
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ALIGN_END]: alignEnd,
        [cssClasses.NOWRAP]: nowrap,
        [cssClasses.SPACE_BETWEEN]: spaceBetween
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {children}

            {label &&
                <label htmlFor={children.props.id}>{label}</label>
            }
        </Element>
    );
});

FormField.displayName = 'MDCFormField';

FormField.propTypes = {
    label: PropTypes.node,
    alignEnd: PropTypes.bool,
    nowrap: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    children: PropTypes.any.isRequired
};

export default FormField;