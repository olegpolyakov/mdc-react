import React from 'react';
import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

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

type SnackbarProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: SnackbarProps<TElement, TRef>
): JSX.Element;
