import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(CardSection);

function CardSection({
    primary = false,
    secondary = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__section', {
        'mdc-card__section--primary': primary,
        'mdc-card__section--secondary': secondary,
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

CardSection.displayName = 'MDCCardSection';

CardSection.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool
};