import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    graphic?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode | React.ReactNode[];
    large?: boolean;
    className?: string;
};

export type CardHeaderProps<E, R, C> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: CardHeaderProps<TElement, TComponent, TRef>): JSX.Element;
