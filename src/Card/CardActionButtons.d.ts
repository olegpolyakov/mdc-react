import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {className?: string};

export type CardActionButtonsProps<E, C, R> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: CardActionButtonsProps<TElement, TComponent, TRef>): JSX.Element;
