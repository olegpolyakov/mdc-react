import {
    HTMLElementMap,
    HTMLElementTagName,
    InferredComponent,
    PropsWithElementAndComponent,
    RefForwardingProps
} from '../types';
import React from 'react';

type Props = {
    label: string;
    icon: React.ReactNode;
    leadingIcon: React.ReactNode;
    trailingIcon: React.ReactNode;
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    className?: string;
};

export type ButtonProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ButtonProps & RefForwardingProps<TElement, TComponent, TRef>): JSX.Element;
