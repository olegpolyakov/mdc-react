import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cssClasses } from './constants';

const LayoutGridCell = forwardRef(({
    span,
    desktop,
    tablet,
    mobile,
    order,
    align,
    grid = false,

    element = 'div',
    component = element,
    className,
    children,
    ...props
}, ref) => {
    const Element = component;
    const classNames = classnames(cssClasses.CELL, {
        [`${cssClasses.CELL_SPAN}-${span}`]: span,
        [`${cssClasses.CELL_SPAN}-${desktop}-desktop`]: desktop,
        [`${cssClasses.CELL_SPAN}-${tablet}-tablet`]: tablet,
        [`${cssClasses.CELL_SPAN}-${mobile}-mobile`]: mobile,
        [`${cssClasses.CELL_ORDER}-${order}`]: order,
        [`${cssClasses.CELL_ALIGN}-${align}`]: align
    }, className);

    return (
        <Element ref={ref} className={classNames} {...props}>
            {grid ?
                <div className={cssClasses.INNER}>
                    {children}
                </div>
                :
                children
            }
        </Element>
    );
});

LayoutGridCell.displayName = 'MDCLayoutGridCell';

LayoutGridCell.propTypes = {
    span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    desktop: PropTypes.number,
    tablet: PropTypes.number,
    mobile: PropTypes.number,
    order: PropTypes.number,
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
    grid: PropTypes.bool
};

export default LayoutGridCell;