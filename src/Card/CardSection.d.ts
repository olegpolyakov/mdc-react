import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    primary?: boolean;
    secondary?: boolean;
    className?: string;
};

export type CardSectionProps<
    T extends HTMLElementTagName,
    R extends HTMLElementMap<R>,
    C extends InferredComponent<C>
> = PropsWithElementAndComponent<Props, T, R, C>;

export default function <
    TName extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: CardSectionProps<TName, TRef, TComponent>): JSX.Element;
