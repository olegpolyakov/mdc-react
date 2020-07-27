import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(CardActions);

function CardActions({
    fullBleed = false,

    element: Element = 'div',
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-card__actions', {
        'mdc-card__actions--full-bleed': fullBleed
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

CardActions.displayName = 'MDCCardActions';

CardActions.propTypes = {
    fullBleed: PropTypes.bool
};