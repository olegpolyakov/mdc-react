import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    align?: 'start' | 'center' | 'end';
    className?: string;
};

export type TopAppBarSectionProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: TopAppBarSectionProps<TElement, TRef>
): JSX.Element;
