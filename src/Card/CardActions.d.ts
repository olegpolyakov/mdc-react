import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    fullBleed?: boolean;
    className?: string;
};

export type CardActionsProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TRef extends HTMLElementMap<TElement>>(
    props: CardActionsProps<TElement, TRef>
): JSX.Element;
