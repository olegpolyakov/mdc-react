import React from 'react';

export type DataTablePaginationProps = {
    ref?: React.ForwardedRef<HTMLDivElement>;
    totalCount;
    currentPage?: number;
    rowsPerPage?: number;
    onFirstPage?: () => void;
    onPrevPage?: () => void;
    onNextPage?: () => void;
    onLastPage?: () => void;
    className;
};

export default function (props: DataTablePaginationProps): JSX.Element;
