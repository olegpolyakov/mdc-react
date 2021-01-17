import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
import React from 'react';

export type Props = {
    alt?: string;
    className?: string;
    icon?: React.ReactNode;
    large?: boolean;
    small?: boolean;
    src?: string;
    text?: string;
};

export type AvatarProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: AvatarProps<TElement, TComponent>): JSX.Element;
