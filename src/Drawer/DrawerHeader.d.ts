import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    graphic?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
};

export type DrawerHeaderProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'header', TRef extends HTMLElementMap<TElement>>(
    props: DrawerHeaderProps<TElement, TRef>
): JSX.Element;
