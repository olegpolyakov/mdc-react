import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = { className?: string };

export type ListItemMetaProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: ListItemMetaProps<TElement, TComponent>): JSX.Element;
