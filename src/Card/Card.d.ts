import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    outlined?: boolean;
    className?: string;
};

export type CardProps<E, C, R> = PropsWithElementAndComponent<T, R, C> & Props;

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: CardProps<TName, TRef, TComponent>): JSX.Element;
