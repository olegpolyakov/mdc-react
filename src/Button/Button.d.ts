import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';
import React from 'react';

export type ButtonProps = {
    label: string;
    icon: React.ReactElement;
    leadingIcon: React.ReactElement;
    trailingIcon: React.ReactElement;
    raised?: boolean;
    unelevated?: boolean;
    outlined?: boolean;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: ButtonProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
