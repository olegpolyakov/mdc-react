import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    title?: React.ReactNode;
    content: React.ReactNode;
    actions?: React.ReactNode[];
    open?: boolean;
    appear?: boolean;
    persistent?: boolean;
    onClose?: () => void;
    className?: string;
};

export type DialogProps<T, R> = PropsWithElement<T, R> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: DialogProps<TElement, TRef>
): JSX.Element;
