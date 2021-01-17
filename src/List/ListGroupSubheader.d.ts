import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    title?: string;
    className?: string;
};

export type ListGroupSubheaderProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'h3', TRef extends HTMLElementMap<TElement>>(
    props: ListGroupSubheaderProps<TElement, TRef>
): JSX.Element;
