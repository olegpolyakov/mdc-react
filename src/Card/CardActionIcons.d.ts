import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {className?: string};

export type CardActionIconsProps<E, C, R> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: CardActionIconsProps<TName, TRef, TComponent>): JSX.Element;
