import React from 'react';

export type DataTableFooterProps = {
    ref?: React.ForwardedRef<HTMLTableSectionElement>;
    className?: string;
} & React.HTMLProps<HTMLTableSectionElement>;

export default function (props: DataTableFooterProps): JSX.Element;
