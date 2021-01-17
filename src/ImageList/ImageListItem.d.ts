import {HTMLElementMap, HTMLElementTagName, PropsWithElement} from '../types';

type Props = {
    src?: string;
    label?: string;
    className?: string;
};

export type ImageListItemProps<E, R> = PropsWithElement<E, R> & Props;

export default function <TElement extends HTMLElementTagName = 'li', TRef extends HTMLElementMap<TElement>>(
    props: ImageListItemProps<TElement, TRef>
): JSX.Element;
