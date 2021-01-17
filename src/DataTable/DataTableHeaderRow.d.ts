import React from 'react';

export type DataTableHeaderProps = {
    ref?: React.ForwardedRef<HTMLTableRowElement>;
    className?: string;
} & React.HTMLProps<HTMLTableRowElement>;

export default function (props: DataTableHeaderProps): JSX.Element;
