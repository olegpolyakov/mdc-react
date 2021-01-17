import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    z?: number;
    transition?: boolean;
    className?: string;
};

export type ElevationProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: ElevationProps<TElement, TComponent, TRef>): JSX.Element;
