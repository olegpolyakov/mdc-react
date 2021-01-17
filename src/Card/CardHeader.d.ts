import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    graphic?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode | React.ReactNode[];
    large?: boolean;
    className?: string;
};

export type CardHeaderProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: CardHeaderProps<TElement, TComponent>
): JSX.Element;
