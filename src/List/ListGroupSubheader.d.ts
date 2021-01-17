import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    title?: string;
    className?: string;
};

export type ListGroupSubheaderProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'h3'>(
    props: ListGroupSubheaderProps<TElement>
): JSX.Element;
