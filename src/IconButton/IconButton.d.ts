import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
import React from 'react';

type Props = {
    icon?: React.ReactNode;
    className?: string;
};

export type IconButtonProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>
>(props: IconButtonProps<TElement, TComponent>): JSX.Element;
