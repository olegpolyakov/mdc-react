import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = { className?: string };

export type CardActionIconsProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: CardActionIconsProps<TElement, TComponent>
): JSX.Element;
