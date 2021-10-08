import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const CardSection = forwardRef(({
    primary = false,
    secondary = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.SECTION, {
        [cssClasses.SECTION_PRIMARY]: primary,
        [cssClasses.SECTION_SECONDARY]: secondary,
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

CardSection.displayName = 'MDCCardSection';

CardSection.propTypes = {
    primary: PropTypes.bool,
    secondary: PropTypes.bool
};

export default CardSection;