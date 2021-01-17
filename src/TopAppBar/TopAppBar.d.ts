import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

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

export type TopAppBarProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: TopAppBarProps<TElement, TComponent>
): JSX.Element;
