import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cssClasses } from './constants';

const DataTableRow = forwardRef(({
    selected = false,

    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.ROW, {
        [cssClasses.ROW_SELECTED]: selected
    }, className);

    return (
        <tr ref={ref} className={classNames} {...props} />
    );
});

DataTableRow.displayName = 'MDCDataTableRow';

DataTableRow.propTypes = {
    selected: PropTypes.bool
};

export default DataTableRow;