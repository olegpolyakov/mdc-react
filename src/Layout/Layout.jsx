import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default React.forwardRef(Layout);

function Layout({
    row,
    column,
    direction,
    alignItems,
    alignSelf,
    justifyContent,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-layout', {
        'mdc-layout--row': row,
        'mdc-layout--column': column,
        [`mdc-layout--direction--${direction}`]: direction,
        [`mdc-layout--align-items--${alignItems}`]: alignItems,
        [`mdc-layout--align-self--${alignSelf}`]: alignSelf,
        [`mdc-layout--justify-content--${justifyContent}`]: justifyContent
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
}

Layout.displayName = 'MDCLayout';

Layout.propTypes = {
    row: PropTypes.bool,
    column: PropTypes.bool,
    alignItems: PropTypes.oneOf(['start', 'center', 'end']),
    alignSelf: PropTypes.oneOf(['start', 'center', 'end']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};