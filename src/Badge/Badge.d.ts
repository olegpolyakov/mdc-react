import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    className?: string;
    inset?: boolean;
    noBackground?: boolean;
    value?: string | number;
};

export type BadgeProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'span'>(props: BadgeProps<TElement>): JSX.Element;
