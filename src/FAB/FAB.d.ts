import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
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

export type FABProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: FABProps<TElement, TComponent>): JSX.Element;
