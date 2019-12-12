import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Card({
    outlined = false,
    
    element = 'div',
    component: Element = element,
    className,
    ...props
}) {
    const classNames = classnames('mdc-card', {
        'mdc-card--outlined': outlined
    }, className);

    return (
        <Element className={classNames} {...props} />
    );
}

Card.displayName = 'MDCCard';

Card.propTypes = {
    outlined: PropTypes.bool
};