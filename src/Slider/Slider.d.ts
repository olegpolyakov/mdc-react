import React from 'react';

type SliderProps = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    range?: boolean;
    discrete?: boolean;
    tickMarks?: boolean;
    disabled?: boolean;
    // TODO: Specify arguments
    onChange?: () => void;
    className?: string;
    ref: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: SliderProps): JSX.Element;
