import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

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

export type TabBarProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <TElement extends HTMLElementTagName = 'nav', TComponent extends InferredComponent<TComponent>>(
    props: TabBarProps<TElement, TComponent>
): JSX.Element;
