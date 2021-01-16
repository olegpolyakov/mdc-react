import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    graphic?: React.ReactNode; // Element ?
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode | React.ReactNode[];
    large?: boolean;
    className?: string;
};

export type CardHeaderProps<
    T extends HTMLElementTagName,
    R extends HTMLElementMap<R>,
    C extends InferredComponent<C>
> = PropsWithElementAndComponent<Props, T, R, C>;

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: CardHeaderProps<TName, TRef, TComponent>): JSX.Element;
