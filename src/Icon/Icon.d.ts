import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    size?: 'small' | 'medium' | 'large';
    dark?: boolean;
    light?: boolean;
    inactive?: boolean;
    className?: string;
};

export type IconProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'i',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: IconProps<TElement, TComponent, TRef>): JSX.Element;
