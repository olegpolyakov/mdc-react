import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';

import { cssClasses } from './constants';

const DataTableCell = forwardRef(({
    checkbox = false,
    numeric = false,

    element: Element = 'td',
    scope,
    className,
    children,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.CELL, {
        [cssClasses.CELL_CHECKBOX]: checkbox,
        [cssClasses.CELL_NUMERIC]: numeric
    }, className);

    return (
        <Element ref={ref} className={classNames} scope={scope} {...props}>
            {checkbox ?
                <Clone
                    component={children}
                    className={cssClasses.ROW_CHECKBOX}
                />
                :
                children
            }
        </Element>
    );
});

DataTableCell.displayName = 'MDCDataTableCell';

DataTableCell.propTypes = {
    checkbox: PropTypes.bool,
    numeric: PropTypes.bool
};

export default DataTableCell;