import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    title?: string;
    closeIcon?: React.ReactNode;
    onClose?: () => void;
};

export type SideSheetHeaderProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'header'>(
    props: SideSheetHeaderProps<TElement>
): JSX.Element;
