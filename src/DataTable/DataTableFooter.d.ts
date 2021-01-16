import React, {PropsWithChildren} from 'react';

export type DataTableFooterProps = PropsWithChildren<
    {
        ref?: React.ForwardedRef<HTMLTableSectionElement>;
        className?: string;
    } & React.HTMLProps<HTMLTableSectionElement>
>;

export default function (props: DataTableFooterProps): JSX.Element;
