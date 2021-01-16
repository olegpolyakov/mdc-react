import React from 'react';

type RadioProps = {
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    ref: React.ForwardedRef<HTMLDivElement>;
} & React.HTMLProps<HTMLDivElement>;

export default function (props: RadioProps): JSX.Element;
