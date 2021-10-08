import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const CardActions = forwardRef(({
    fullBleed = false,

    element: Element = 'div',
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ACTIONS, {
        [cssClasses.ACTIONS_FULL_BLEED]: fullBleed
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

CardActions.displayName = 'MDCCardActions';

CardActions.propTypes = {
    fullBleed: PropTypes.bool
};

export default CardActions;