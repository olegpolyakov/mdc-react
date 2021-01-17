import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

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

export type ListItemProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'li',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ListItemProps<TElement, TComponent, TRef>): JSX.Element;
