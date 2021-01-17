import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    className?: string;
};

export type CardSectionProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'div', TComponent extends InferredComponent<TComponent>>(
    props: CardSectionProps<TElement, TComponent>
): JSX.Element;
