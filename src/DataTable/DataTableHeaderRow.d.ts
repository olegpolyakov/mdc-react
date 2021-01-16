import React, {PropsWithChildren} from 'react';

export type DataTableHeaderProps = PropsWithChildren<
    {
        ref?: React.ForwardedRef<HTMLTableRowElement>;
        className?: string;
    } & React.HTMLProps<HTMLTableRowElement>
>;

export default function (props: DataTableHeaderProps): JSX.Element;
