import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    src?: string;
    label?: string;
    className?: string;
};

export type ImageListItemProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'li'>(props: ImageListItemProps<TElement>): JSX.Element;
