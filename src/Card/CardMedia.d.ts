import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    imageUrl?: string;
    content?: React.ReactNode;
    square?: boolean;
    wide?: boolean;
    className?: string;
};

export type CardProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: CardProps<TElement, TComponent>
): JSX.Element;
