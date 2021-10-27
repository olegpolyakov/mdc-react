import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const Layout = forwardRef(({
    row,
    column,
    direction,
    wrap,
    alignItems,
    alignSelf,
    justifyContent,

    element = 'div',
    component: Element = element,
    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROOT, {
        [cssClasses.ROW]: row,
        [cssClasses.COLUMN]: column,
        [`${cssClasses.DIRECTION}--${direction}`]: direction,
        [`${cssClasses.ALIGN_ITEMS}--${alignItems}`]: alignItems,
        [`${cssClasses.ALIGN_SELF}--${alignSelf}`]: alignSelf,
        [`${cssClasses.JUSTIFY_CONTENT}--${justifyContent}`]: justifyContent,
        [cssClasses.WRAP]: wrap === true,
        [cssClasses.WRAP_REVERSE]: wrap === 'reverse'
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props} />
    );
});

Layout.displayName = 'MDCLayout';

Layout.propTypes = {
    row: PropTypes.bool,
    column: PropTypes.bool,
    direction: PropTypes.oneOf(['row', 'column']),
    wrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    alignItems: PropTypes.oneOf(['start', 'center', 'end']),
    alignSelf: PropTypes.oneOf(['start', 'center', 'end']),
    justifyContent: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between'])
};

export default Layout;