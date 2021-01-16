import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';
import React from 'react';

export type AvatarProps = {
    large?: boolean;
    small?: boolean;
    src: string;
    icon?: React.ReactElement;
    text?: string;
    className?: string;
    alt?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: AvatarProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
