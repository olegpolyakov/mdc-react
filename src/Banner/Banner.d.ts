import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';
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

export type BannerProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: BannerProps<TElement, TComponent>): JSX.Element;
