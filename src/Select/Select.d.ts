import React from 'react';
import {SelectHelperTextProps} from './HelperText';
import {MenuProps} from '../Menu/Menu';

export type SelectProps = {
    name?: string;
    value?: string | number;
    options?: any[];
    label?: string;
    leadingIcon?: React.ReactNode;
    helperText?: string;
    filled?: boolean;
    outlined?: boolean;
    multiple?: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange: <El = HTMLInputElement>(e: React.ChangeEvent<El>) => void;
    menuProps: MenuProps;
    helperTextProps: SelectHelperTextProps;
    ref?: React.ForwardedRef<HTMLDivElement>;
    className?: string;
} & React.HTMLProps<HTMLInputElement>;

export default function (props: SelectProps): JSX.Element;
