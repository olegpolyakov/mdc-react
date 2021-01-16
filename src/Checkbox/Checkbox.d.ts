import React, {ForwardedRef} from 'react';

export type CheckboxProps = {
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    ref?: ForwardedRef<HTMLInputElement>;
} & React.HTMLProps<HTMLInputElement>;

export default function (props: CheckboxProps): JSX.Element;
