import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    masonry: boolean;
    className?: string;
    withTextProtection: boolean;
};

export type ImageListProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'ul'>(props: ImageListProps<TElement>): JSX.Element;
