import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    className?: string;
};

export type TopAppBarRowProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'div'>(props: TopAppBarRowProps<TElement>): JSX.Element;
