import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

export type DrawerContentProps<E, R> = PropsWithElement<E, R>;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: DrawerContentProps<TElement, TRef>
): JSX.Element;
