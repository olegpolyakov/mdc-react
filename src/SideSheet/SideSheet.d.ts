import React from 'react';
import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

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

export type SideSheetProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'aside',
    TComponent extends InferredComponent<TComponent>
>(props: SideSheetProps<TElement, TComponent>): JSX.Element;
