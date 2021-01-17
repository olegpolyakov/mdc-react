import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
import React from 'react';

type Props = {
    value: string | number;
    text?: string;
    leadingIcon?: boolean | React.ReactNode;
    trailingIcon?: React.ReactNode;
    selected?: boolean;
    outlined?: boolean;
    onClick?: () => void;
};

export type ChipProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: ChipProps<TElement, TComponent>
): JSX.Element;
