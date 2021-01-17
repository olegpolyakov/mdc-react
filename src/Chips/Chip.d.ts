import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React, {PropsWithChildren} from 'react';

type Props = {
    value: string | number;
    text?: string;
    leadingIcon?: boolean | React.ReactNode;
    trailingIcon?: React.ReactNode;
    selected?: boolean;
    outlined?: boolean;
    onClick?: () => void;
};

export type ChipProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & PropsWithChildren<Props>;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ChipProps<TElement, TComponent, TRef>): JSX.Element;
