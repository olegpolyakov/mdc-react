import React from 'react';

import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type SnackbarProps = {
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

// TODO: Omit<Props,'component'>
export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: SnackbarProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
