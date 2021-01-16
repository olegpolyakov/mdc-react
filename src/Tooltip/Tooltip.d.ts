import React, {PropsWithChildren} from 'react';
import {HTMLElementTagName} from '../types';

type TooltipProps = PropsWithChildren<{
    label?: React.ReactNode;
    element?: HTMLElementTagName;
    className?: string;
    ref: HTMLElement;
}>;

export default function (props: TooltipProps): JSX.Element;
