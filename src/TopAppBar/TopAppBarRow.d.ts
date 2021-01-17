import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    className?: string;
};

export type TopAppBarRowProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: TopAppBarRowProps<TElement, TRef>
): JSX.Element;
