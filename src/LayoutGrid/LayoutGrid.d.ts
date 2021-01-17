import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    align?: 'start' | 'center' | 'end';
    fixedColumnWidth?: boolean;
    className?: string;
};

export type LayoutGridProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: LayoutGridProps<TElement, TComponent>
): JSX.Element;
