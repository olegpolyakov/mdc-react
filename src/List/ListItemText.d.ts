import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    text: React.ReactNode;
    primary: React.ReactNode;
    secondary: React.ReactNode;
    className?: string;
};

export type ListItemTextProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: ListItemTextProps<TElement, TComponent>): JSX.Element;
