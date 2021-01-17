import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    value?: string | number;
    icon?: React.ReactElement;
    label?: React.ReactNode;
    active?: boolean;
    stacked?: boolean;
    minWidth?: boolean;
    fade?: boolean;
    underline?: boolean;
    // BoundingClientRect??
    previousIndicatorClientRect?: ClientRect | any;
    // TODO: Specify arguments
    onClick?: () => void;
    className?: string;
};

// useImperativeHandle(ref, () => rootRef.current);
export type TabProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: TabProps<TElement, TComponent, TRef>): JSX.Element;
