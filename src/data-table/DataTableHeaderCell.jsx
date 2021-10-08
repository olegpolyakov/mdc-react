import { forwardRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Clone } from '../component';
import IconButton from '../icon-button';

import { cssClasses } from './constants';

const DataTableHeaderCell = forwardRef(({
    value,
    label,
    checkbox = false,
    numeric = false,
    sort,
    sortIconButton = 'arrow_upward',
    onSort = Function.prototype,

    element: Element = 'th',
    role = 'columnheader',
    scope = 'col',
    className,
    children = label,
    ...props
}, ref) => {
    const handleSortIconClick = useCallback(() => {
        onSort({ label, value });
    }, [label, value, onSort]);

    const withSort = typeof sort === 'number';

    const classNames = classnames(cssClasses.HEADER_CELL, {
        [cssClasses.HEADER_CELL_CHECKBOX]: checkbox,
        [cssClasses.HEADER_CELL_NUMERIC]: numeric,
        [cssClasses.HEADER_CELL_WITH_SORT]: withSort,
        [cssClasses.HEADER_CELL_SORTED]: sort === 1 || sort === -1,
        [cssClasses.HEADER_CELL_SORTED_DESC]: sort === -1
    }, className);

    return (
        <Element
            ref={ref}
            className={classNames}
            role={role}
            scope={scope}
            {...props}
        >
            {withSort ?
                <div className={cssClasses.HEADER_CELL_WRAPPER}>
                    <div className={cssClasses.HEADER_CELL_LABEL}>
                        {children}
                    </div>

                    <Clone
                        component={sortIconButton}
                        fallback={IconButton}
                        className={cssClasses.SORT_ICON_BUTTON}
                        onClick={handleSortIconClick}
                    />

                    <div className={cssClasses.SORT_STATUS_LABEL} aria-hidden="true" />
                </div>
                :
                (checkbox ?
                    <Clone
                        component={children}
                        className={cssClasses.HEADER_ROW_CHECKBOX}
                    />
                    :
                    children
                )
            }
        </Element>
    );
});

DataTableHeaderCell.displayName = 'MDCDataTableHeaderCell';

DataTableHeaderCell.propTypes = {
    value: PropTypes.any,
    label: PropTypes.string,
    numeric: PropTypes.bool,
    checkbox: PropTypes.bool,
    sort: PropTypes.oneOf([-1, 0, 1]),
    sortIconButton: PropTypes.node,
    onSort: PropTypes.func
};

export default DataTableHeaderCell;