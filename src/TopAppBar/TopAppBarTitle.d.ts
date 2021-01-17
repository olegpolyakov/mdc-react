import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    className?: string;
};

export type TopAppBarTitleProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'span', TRef extends HTMLElementMap<TElement>>(
    props: TopAppBarTitleProps<TElement, TRef>
): JSX.Element;
