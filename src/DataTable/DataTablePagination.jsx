import React from 'react';
import classnames from 'classnames';

import IconButton from '../IconButton';
import Select from '../Select';

export default React.forwardRef(DataTablePagination);

function DataTablePagination({
    totalCount,
    currentPage = 1,
    rowsPerPage = 10,
    onFirstPage = Function.prototype,
    onPrevPage = Function.prototype,
    onNextPage = Function.prototype,
    onLastPage = Function.prototype,

    className,
    ...props
}, ref) {
    const classNames = classnames('mdc-data-table__pagination', className);

    return (
        <div ref={ref} className={classNames} {...props}>
            <div className="mdc-data-table__pagination-trailing">
                <div className="mdc-data-table__pagination-rows-per-page">
                    <div className="mdc-data-table__pagination-rows-per-page-label">
                        Рядов на стр.
                    </div>

                    <Select
                        className="mdc-data-table__pagination-rows-per-page-select"
                        options={
                            [10, 25, 50, 100].map(value => ({
                                key: value,
                                text: value,
                                //selected: value === rowsPerPage
                            }))
                        }
                    />
                </div>

                <div className="mdc-data-table__pagination-navigation">
                    <div className="mdc-data-table__pagination-total">
                        {currentPage}‑{rowsPerPage} из {totalCount}
                    </div>

                    <IconButton
                        className="mdc-data-table__pagination-button"
                        icon="first_page"
                        onClick={onFirstPage}
                    />

                    <IconButton
                        className="mdc-data-table__pagination-button"
                        icon="chevron_left"
                        onClick={onPrevPage}
                    />

                    <IconButton
                        className="mdc-data-table__pagination-button"
                        icon="chevron_right"
                        onClick={onNextPage}
                    />

                    <IconButton
                        className="mdc-data-table__pagination-button"
                        icon="last_page"
                        onClick={onLastPage}
                    />
                </div>
            </div>
        </div>
    );
}

DataTablePagination.displayName = 'MDCDataTablePagination';