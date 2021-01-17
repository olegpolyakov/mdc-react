import React from 'react';
import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    title?: string;
    open?: boolean;
    appear?: boolean;
    dismissible?: boolean;
    modal?: boolean;
    onClose: () => void;
    content?: React.ReactNode;
    closeIcon?: React.ReactNode;
    appContentSelector?: string;
    className?: string;
};

export type SideSheetProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'aside',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: SideSheetProps<TElement, TComponent, TRef>): JSX.Element;
