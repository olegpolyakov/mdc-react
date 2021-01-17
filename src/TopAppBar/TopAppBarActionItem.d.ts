import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    className?: string;
};

export type TopAppBarActionItemProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: TopAppBarActionItemProps<TElement, TRef>
): JSX.Element;
