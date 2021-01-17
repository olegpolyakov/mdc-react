import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    masonry: boolean;
    className?: string;
    withTextProtection: boolean;
};

export type ImageListProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'ul', TRef extends HTMLElementMap<TElement>>(
    props: ImageListProps<TElement, TRef>
): JSX.Element;
