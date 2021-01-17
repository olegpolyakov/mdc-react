import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = { className?: string };

export type CardActionButtonsProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: CardActionButtonsProps<TElement, TComponent>
): JSX.Element;
