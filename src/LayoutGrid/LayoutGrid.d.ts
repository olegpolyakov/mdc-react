import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    align?: 'start' | 'center' | 'end';
    fixedColumnWidth?: boolean;
    className?: string;
};

export type LayoutGridProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: LayoutGridProps<TElement, TComponent, TRef>): JSX.Element;
