import { forwardRef } from 'react';
import classnames from 'classnames';

import IconButton from '../icon-button';
import Select from '../select';

import { cssClasses } from './constants';

const DataTablePagination = forwardRef(({
    totalCount,
    currentPage = 1,
    rowsPerPage = 10,
    onFirstPage = Function.prototype,
    onPrevPage = Function.prototype,
    onNextPage = Function.prototype,
    onLastPage = Function.prototype,

    className,
    ...props
}, ref) => {
    const classNames = classnames(cssClasses.PAGINATION, className);

    return (
        <div ref={ref} className={classNames} {...props}>
            <div className={cssClasses.PAGINATION_TRAILING}>
                <div className={cssClasses.PAGINATION_ROWS_PER_PAGE}>
                    <div className={cssClasses.PAGINATION_ROWS_PER_PAGE_LABEL}>
                        Рядов на стр.
                    </div>

                    <Select
                        className={cssClasses.PAGINATION_ROWS_PER_PAGE_SELECT}
                        options={
                            [10, 25, 50, 100].map(value => ({
                                key: value,
                                text: value,
                                //selected: value === rowsPerPage
                            }))
                        }
                    />
                </div>

                <div className={cssClasses.PAGINATION_NAVIGATION}>
                    <div className={cssClasses.PAGINATION_TOTAL}>
                        {currentPage}‑{rowsPerPage} из {totalCount}
                    </div>

                    <IconButton
                        className={cssClasses.PAGINATION_BUTTON}
                        icon="first_page"
                        onClick={onFirstPage}
                    />

                    <IconButton
                        className={cssClasses.PAGINATION_BUTTON}
                        icon="chevron_left"
                        onClick={onPrevPage}
                    />

                    <IconButton
                        className={cssClasses.PAGINATION_BUTTON}
                        icon="chevron_right"
                        onClick={onNextPage}
                    />

                    <IconButton
                        className={cssClasses.PAGINATION_BUTTON}
                        icon="last_page"
                        onClick={onLastPage}
                    />
                </div>
            </div>
        </div>
    );
});

DataTablePagination.displayName = 'MDCDataTablePagination';

export default DataTablePagination;