import { HTMLElementTagName, PropsWithElement } from '../types';

export type DrawerContentProps<E = any> = PropsWithElement<E>;

export default function <TElement extends HTMLElementTagName = 'div'>(props: DrawerContentProps<TElement>): JSX.Element;
