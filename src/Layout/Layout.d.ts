import { HTMLElementTagName, InferredComponent, PropsWithElementAndComponent } from '../types';

type JustifyContent = 'start' | 'center' | 'end' | 'around' | 'between';
type AlignSelf = 'start' | 'center' | 'end';
type AlignItems = 'start' | 'center' | 'end';
type Direction = 'row' | 'column';

type Props = {
    row?: boolean;
    column?: boolean;
    direction?: Direction;
    alignItems?: AlignItems;
    alignSelf?: AlignSelf;
    justifyContent?: JustifyContent;
    className?: string;
};

export type LayoutProps<E = any, C = any> = PropsWithElementAndComponent<E, C> & Props;

export default function <
    TElement extends HTMLElementTagName = 'span',
    TComponent extends InferredComponent<TComponent>
>(props: LayoutProps<TElement, TComponent>): JSX.Element;
