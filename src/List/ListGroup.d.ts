import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    className?: string;
};

export type ListGroupProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'li'>(props: ListGroupProps<TElement>): JSX.Element;
