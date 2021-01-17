import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React from 'react';

type Props = {
    icon?: React.ReactNode;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    label?: string;
    mini?: boolean;
    extended?: boolean;
    exited?: boolean;
    className: string;
};

export type FABProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: FABProps<TElement, TComponent, TRef>): JSX.Element;
