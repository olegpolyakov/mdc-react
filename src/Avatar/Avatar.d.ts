import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React, {PropsWithChildren} from 'react';

export type Props = {
    large?: boolean;
    small?: boolean;
    src: string;
    icon?: React.ReactElement;
    text?: string;
    className?: string;
    alt?: string;
};

export type AvatarProps<E, R, C> = PropsWithElementAndComponent<E, R, C> & PropsWithChildren<Props>;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TElement>,
    TComponent extends InferredComponent<TComponent>
>(props: AvatarProps<TElement, TRef, TComponent>): JSX.Element;
