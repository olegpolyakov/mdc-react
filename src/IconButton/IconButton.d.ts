import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React from 'react';

type Props = {
    icon?: React.ReactNode;
    className?: string;
};

export type IconButtonProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: IconButtonProps<TElement, TComponent, TRef>): JSX.Element;
