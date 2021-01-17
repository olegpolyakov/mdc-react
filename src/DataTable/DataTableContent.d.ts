import React from 'react';

export type DataTableContentProps = {
    ref?: React.ForwardedRef<HTMLTableSectionElement>;
    className?: string;
} & React.HTMLProps<HTMLTableSectionElement>;

export default function (props: DataTableContentProps): JSX.Element;
