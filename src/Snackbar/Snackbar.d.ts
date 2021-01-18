import React from 'react';
import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    label?: string;
    action?: React.ReactElement;
    open?: boolean;
    appear?: boolean;
    leading?: boolean;
    stacked?: boolean;
    dismissible?: boolean;
    timeout?: number;
    closeOnEscape?: boolean;
    onClose?: () => void;
    className?: string;
};

export type SnackbarProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'div'>(props: SnackbarProps<TElement>): JSX.Element;
