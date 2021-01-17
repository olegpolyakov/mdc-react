import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    inset: 'leading' | 'trailing' | 'padding';
    className?: string;
};

export type ListDividerProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'li'>(props: ListDividerProps<TElement>): JSX.Element;
