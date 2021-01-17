import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    text: React.ReactNode;
    primary: React.ReactNode;
    secondary: React.ReactNode;
    className?: string;
};

export type ListItemTextProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ListItemTextProps<TElement, TComponent, TRef>): JSX.Element;
