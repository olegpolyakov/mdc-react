import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

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
export type TabProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'button',
    TComponent extends InferredComponent<TComponent>
>(props: TabProps<TElement, TComponent>): JSX.Element;
