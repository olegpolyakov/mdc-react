import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    imageUrl?: string;
    content?: React.ReactNode;
    square?: boolean;
    wide?: boolean;
    className?: string;
};

export type CardProps<E, R, C> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: CardProps<TElement, TComponent, TRef>): JSX.Element;
