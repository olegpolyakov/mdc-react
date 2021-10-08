import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Card = forwardRef(({
    outlined = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.OUTLINED]: outlined
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

Card.displayName = 'MDCCard';

Card.propTypes = {
    outlined: PropTypes.bool
};

export default Card;