import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    title?: string;
    closeIcon?: React.ReactNode;
    onClose?: () => void;
};

export type SideSheetHeaderProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'header', TRef extends HTMLElementMap<TElement>>(
    props: SideSheetHeaderProps<TElement, TRef>
): JSX.Element;
