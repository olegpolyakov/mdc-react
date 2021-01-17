import { HTMLElementTagName, PropsWithElement } from '../types';

export type ListGroupProps<E = any> = PropsWithElement<E>;

export default function <TElement extends HTMLElementTagName = 'div'>(props: ListGroupProps<TElement>): JSX.Element;
