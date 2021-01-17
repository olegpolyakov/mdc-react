import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    align: ['top' | 'middle' | 'bottom'];
    className?: string;
    desktop: number;
    grid: boolean;
    mobile: number;
    order: number;
    span: number | string;
    tablet: number;
};

export type LayoutGridProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: LayoutGridProps<TElement, TComponent, TRef>): JSX.Element;
