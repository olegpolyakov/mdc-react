import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    className?: string;
};

export type ListGroupProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: ListGroupProps<TElement, TRef>
): JSX.Element;
