import React from 'react';

export type CircularProgressProps = {
    value?: number;
    size?: 'large' | 'medium' | 'small';
    indeterminate?: boolean;
    closed?: boolean;
    colorful?: boolean;
    className?: string;
    ref?: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: CircularProgressProps): JSX.Element;
