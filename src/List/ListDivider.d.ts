import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    inset: 'leading' | 'trailing' | 'padding';
    className?: string;
};

export type ListDividerProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: ListDividerProps<TElement, TRef>
): JSX.Element;
