import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

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

export type DialogProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'div'>(props: DialogProps<TElement>): JSX.Element;
