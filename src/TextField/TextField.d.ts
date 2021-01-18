import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    value?: any;
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    prefix?: string;
    suffix?: string;
    outline?: boolean;
    fullWidth?: boolean;
    textarea?: boolean;
    dense?: boolean;
    disabled?: boolean;
    helperText?: string;
    endAligned?: boolean;
    validationMessage?: boolean | string;
    outlined?: false;
    filled?: false;
    defaultValue?: any;
    className?: string;
    onChange: () => void;
};

export type TextFieldProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'th'>(props: TextFieldProps<TElement>): JSX.Element;
