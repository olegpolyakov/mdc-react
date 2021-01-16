import React, {PropsWithChildren} from 'react';

type NotchedOutlineProps = PropsWithChildren<{
    notched?: boolean;
    className?: string;
    ref: React.ForwardedRef<HTMLSpanElement>;
}> &
    React.HTMLProps<HTMLSpanElement>;

export default function (props: NotchedOutlineProps): JSX.Element;
