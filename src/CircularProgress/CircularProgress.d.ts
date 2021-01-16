import React from 'react';

type CircularProgressSize = 'large' | 'medium' | 'small';

export type CircularProgressProps = {
    value?: number;
    size: CircularProgressSize;
    indeterminate?: boolean;
    closed?: boolean;
    colorful?: boolean;
    className?: string;
    ref?: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: CircularProgressProps): JSX.Element;
