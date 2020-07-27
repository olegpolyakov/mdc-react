import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Card);

function Card({
    outlined = false,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-card', {
        'mdc-card--outlined': outlined
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

Card.displayName = 'MDCCard';

Card.propTypes = {
    outlined: PropTypes.bool
};