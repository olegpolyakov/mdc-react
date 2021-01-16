import React from 'react';

type SwitchProps = {
    checked?: boolean;
    disabled?: boolean;
    // Todo: Specify arguments
    onChange?: () => void;

    className?: string;
    ref: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: SwitchProps): JSX.Element;
