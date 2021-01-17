import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type Props = {
    open?: boolean;
    appear?: boolean;
    dismissible?: boolean;
    modal?: boolean;
    appContentSelector?: string;
    onClose?: () => void;
    className?: string;
};

export type DrawerProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'aside',
    TComponent extends InferredComponent<TComponent>
>(props: DrawerProps<TElement, TComponent>): JSX.Element;
