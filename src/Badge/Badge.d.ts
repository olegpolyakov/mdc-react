import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    value?: string | number;
    inset?: boolean;
    noBackground?: boolean;
    className?: string;
};

export type BadgeProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'span', TRef extends HTMLElementMap<TElement>>(
    props: BadgeProps<TElement, TRef>
): JSX.Element;
