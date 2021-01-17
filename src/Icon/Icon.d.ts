import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    size?: 'small' | 'medium' | 'large';
    dark?: boolean;
    light?: boolean;
    inactive?: boolean;
    className?: string;
};

export type IconProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'i', TComponent extends InferredComponent<TComponent>>(
    props: IconProps<TElement, TComponent>
): JSX.Element;
