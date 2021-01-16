import React, {PropsWithChildren} from 'react';

export type DataTableContentProps = PropsWithChildren<
    {
        ref?: React.ForwardedRef<HTMLTableSectionElement>;
        className?: string;
    } & React.HTMLProps<HTMLTableSectionElement>
>;

export default function (props: DataTableContentProps): JSX.Element;
