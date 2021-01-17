import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

export type ListGroupProps<E, R> = PropsWithElement<E, R>;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: ListGroupProps<TElement, TRef>
): JSX.Element;
