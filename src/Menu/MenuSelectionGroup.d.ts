import React, {ElementRef} from 'react';
import {HTMLElementTagName} from '../types';

type MenuSectionGroupProps<E> = {
    element?: E;
    ref?: React.ForwardedRef<HTMLLIElement>;
} & React.HTMLProps<ElementRef<E>>;

export default function <TElement extends HTMLElementTagName = 'ul'>(
    props: MenuSectionGroupProps<TElement>
): JSX.Element;
