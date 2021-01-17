import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    graphic?: React.ReactNode;
    text?: React.ReactNode;
    primaryText?: React.ReactNode;
    secondaryText?: React.ReactNode;
    meta?: React.ReactNode;
    activated?: boolean;
    selected?: boolean;
    disabled?: boolean;
    className?: string;
};

export type ListItemProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'li', TComponent extends InferredComponent<TComponent>>(
    props: ListItemProps<TElement, TComponent>
): JSX.Element;
