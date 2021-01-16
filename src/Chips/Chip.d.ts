import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';
import React from 'react';

export type ChipProps = {
    value: string | number;
    text?: string;
    leadingIcon?: boolean | React.ReactElement;
    trailingIcon?: React.ReactElement;
    selected?: boolean;
    outlined?: boolean;
    onClick?: () => void;
};

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: ChipProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
