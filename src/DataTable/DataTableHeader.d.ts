import React from 'react';

export type DataTableHeaderProps = {
    ref?: React.ForwardedRef<HTMLTableSectionElement>;
    className?: string;
} & React.HTMLProps<HTMLTableSectionElement>;

export default function (props: DataTableHeaderProps): JSX.Element;
