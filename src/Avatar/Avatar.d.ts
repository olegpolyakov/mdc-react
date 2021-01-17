import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React from 'react';

export type Props = {
    large?: boolean;
    small?: boolean;
    src: string;
    icon?: React.ReactElement;
    text?: string;
    className?: string;
    alt?: string;
};

export type AvatarProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: AvatarProps<TElement, TComponent, TRef>): JSX.Element;
