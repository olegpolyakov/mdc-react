import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    label?: React.ReactNode;
    element?: HTMLElementTagName;
    className?: string;
    ref: HTMLElement;
};

// useImperativeHandle
export type TooltipProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'span', TRef extends HTMLElementMap<TElement>>(
    props: TooltipProps<TElement, TRef>
): JSX.Element;
