import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    className?: string;
    title: React.ReactNode;
    navigationIcon: React.ReactNode[];
    actionItems: React.ReactNode[];
    fixed: boolean;
    sticky: boolean;
    dense: boolean;
    prominent: boolean;
    short: boolean;
    collapsed: boolean;
    fixedAdjustSelector?: any;
    fixedAdjustSibling: boolean;
};

export type TopAppBarProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: TopAppBarProps<TElement, TComponent, TRef>): JSX.Element;
