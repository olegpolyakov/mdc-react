import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    label?: React.ReactNode;
    element?: HTMLElementTagName;
    className?: string;
    ref: HTMLElement;
};

// useImperativeHandle
export type TooltipProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'span'>(props: TooltipProps<TElement>): JSX.Element;
