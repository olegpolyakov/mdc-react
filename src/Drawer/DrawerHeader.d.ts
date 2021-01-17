import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    graphic?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
};

export type DrawerHeaderProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'header'>(
    props: DrawerHeaderProps<TElement>
): JSX.Element;
