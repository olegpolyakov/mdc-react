import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    open?: boolean;
    appear?: boolean;
    dismissible?: boolean;
    modal?: boolean;
    appContentSelector?: string;
    onClose?: () => void;
    className?: string;
};

export type DrawerProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'aside',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: DrawerProps<TElement, TComponent, TRef>): JSX.Element;
