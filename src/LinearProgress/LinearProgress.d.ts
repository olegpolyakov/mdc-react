import React, { ForwardedRef } from 'react';

export type LinearProgressProps = {
    value?: number;
    buffer?: number;
    indeterminate?: boolean;
    reversed?: boolean;
    closed?: boolean;
    ref?: ForwardedRef<HTMLDivElement>;
    className?: string;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: LinearProgressProps): JSX.Element;
