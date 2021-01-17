import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
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

export type ButtonProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>
>(props: ButtonProps<TElement, TComponent>): JSX.Element;
