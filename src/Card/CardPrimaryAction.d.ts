import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    className?: string;
};

export type CardPrimaryActionProps<E, R, C> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: CardPrimaryActionProps<TElement, TComponent, TRef>): JSX.Element;
