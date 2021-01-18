import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    label?: string;
    icon?: React.ReactNode;
    selected?: boolean;
    ripple?: boolean;
    className?: string;
};

export type SegmentedButtonSegmentProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>
>(props: SegmentedButtonSegmentProps<TElement, TComponent>): JSX.Element;
