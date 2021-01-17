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
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: CardHeaderProps<TName, TRef, TComponent>): JSX.Element;
