import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    className?: string;
};

export type TopAppBarActionItemProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'li'>(
    props: TopAppBarActionItemProps<TElement>
): JSX.Element;
