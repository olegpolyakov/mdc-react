import React, {PropsWithChildren} from 'react';

type DataTableProps = PropsWithChildren<{
    stickyHeader?: boolean;
    inProgress?: boolean;
    pagination?: React.ReactNode;
    ref?: React.ForwardedRef<HTMLDivElement>;
    className?: string;
}>;

export default function (props: DataTableProps): JSX.Element;
