import React from 'react';

type NotchedOutlineProps = {
    notched?: boolean;
    className?: string;
    ref?: React.ForwardedRef<HTMLSpanElement>;
} & React.HTMLProps<HTMLSpanElement>;

export default function (props: NotchedOutlineProps): JSX.Element;
