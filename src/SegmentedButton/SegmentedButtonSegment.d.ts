import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    label?: string;
    icon?: React.ReactNode;
    selected?: boolean;
    ripple?: boolean;
    className?: string;
};

export type SegmentedButtonSegmentProps<E = any, C = any, R = any> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: SegmentedButtonSegmentProps<TElement, TComponent, TRef>): JSX.Element;
