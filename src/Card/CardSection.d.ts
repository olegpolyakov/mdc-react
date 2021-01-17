import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    className?: string;
};

export type CardSectionProps<E, R, C> = PropsWithElementAndComponent<E, R, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: CardSectionProps<TElement, TComponent, TRef>): JSX.Element;
