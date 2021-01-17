import {HTMLElementMap, HTMLElementTagName, InferredComponent, PropsWithElementAndComponent} from '../types';

type Props = {
    value?: string | number;
    stacked?: boolean;
    minWidth?: boolean;
    fade?: boolean;
    underline?: boolean;
    align?: 'start' | 'center' | 'end';
    // TODO: Specify arguments
    onChange?: () => void;
    className?: string;
};

export type TabBarProps<E, C, R> = PropsWithElementAndComponent<E, C, R> & Props;

export default function <
    TElement extends HTMLElementTagName = 'nav',
    TComponent extends InferredComponent<TComponent>,
    TRef extends HTMLElementMap<TElement>
>(props: TabBarProps<TElement, TComponent, TRef>): JSX.Element;
