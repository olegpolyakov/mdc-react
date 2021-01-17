import { HTMLElementTagName, PropsWithElement } from '../types';

type Props = {
    fullBleed?: boolean;
    className?: string;
};

export type CardActionsProps<E = any> = PropsWithElement<E> & Props;

export default function <TElement extends HTMLElementTagName = 'div'>(props: CardActionsProps<TElement>): JSX.Element;
