import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';
import React from 'react';

type Props = {
    text?: React.ReactNode;
    icon?: React.ReactNode;
    action?: React.ReactNode;
    primaryAction?: React.ReactNode;
    secondaryAction: React.ReactNode;
    open?: boolean;
    fixed?: boolean;
    centered?: boolean;
    mobileStacked?: boolean;
    className?: string;
};

export type BannerProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: BannerProps<TElement, TComponent, TRef>): JSX.Element;
