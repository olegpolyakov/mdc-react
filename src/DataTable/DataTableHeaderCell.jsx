import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '../Icon/Icon';
import IconButton from '../IconButton/IconButton';

export default React.forwardRef(DataTableHeaderCell);

function DataTableHeaderCell({
    label,
    value,
    checkbox = false,
    numeric = false,
    withSort = false,
    sorted,
    sortIconButton,
    onSort = Function.prototype,

    element: Element = 'th',
    role = 'columnheader',
    scope = 'col',
    className,
    children = label,
    ...props
}, ref) {
    const classNames = classnames('mdc-data-table__header-cell', {
        'mdc-data-table__header-cell--checkbox': checkbox,
        'mdc-data-table__header-cell--numeric': numeric,
        'mdc-data-table__header-cell--with-sort': withSort,
        'mdc-data-table__header-cell--sorted': sorted,
        'mdc-data-table__header-cell--sorted-descending': sorted === 'desc'
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
                <div className="mdc-data-table__header-cell-wrapper">
                    <div className="mdc-data-table__header-cell-label">
                        {children}
                    </div>

                    {React.cloneElement(
                        sortIconButton || <IconButton icon={<Icon>arrow_upward</Icon>} />,
                        {
                            className: 'mdc-data-table__sort-icon-button ',
                            onClick: () => onSort({ label, value })
                        }
                    )}

                    <div className="mdc-data-table__sort-status-label" aria-hidden="true" />
                </div>
                :
                (checkbox ? React.cloneElement(children, {
                    className: 'mdc-data-table__header-row-checkbox'
                }) : children)
            }
        </Element>
    );
}

DataTableHeaderCell.displayName = 'MDCDataTableHeaderCell';

DataTableHeaderCell.propTypes = {
    numeric: PropTypes.bool,
    checkbox: PropTypes.bool
};