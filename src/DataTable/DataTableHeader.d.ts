import React, {PropsWithChildren} from 'react';

export type DataTableHeaderProps = PropsWithChildren<
    {
        ref?: React.ForwardedRef<HTMLTableSectionElement>;
        className?: string;
    } & React.HTMLProps<HTMLTableSectionElement>
>;

export default function (props: DataTableHeaderProps): JSX.Element;
