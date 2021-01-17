import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    z?: number;
    transition?: boolean;
    className?: string;
};

export type ElevationProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: ElevationProps<TElement, TComponent>): JSX.Element;
