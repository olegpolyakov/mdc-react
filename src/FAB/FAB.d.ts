import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';
import React from 'react';

export type FABProps = {
    icon: React.ReactElement;
    leadingIcon?: React.ReactElement;
    trailingIcon?: React.ReactElement;
    label?: string;
    mini?: boolean;
    extended?: boolean;
    exited?: boolean;
    className: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: FABProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
