import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cssClasses } from './constants';

const LayoutGrid = forwardRef(({
    align,
    fixedColumnWidth = false,

    element = 'div',
    component = element,
    className,
    children,
    ...props
}, ref) => {
    const Element = component;
    const classNames = classnames(cssClasses.ROOT, {
        [`${cssClasses.ALIGN}-${align}`]: align,
        [cssClasses.FIXED_COLUMN_WIDTH]: fixedColumnWidth
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            <div className={cssClasses.INNER}>{children}</div>
        </Element>
    );
});

LayoutGrid.displayName = 'MDCLayoutGrid';

LayoutGrid.propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    fixedColumnWidth: PropTypes.bool
};

export default LayoutGrid;