import {HTMLElementMap, HTMLElementTagName, InferredComponent, RefForwardingProps} from '../types';

type JustifyContent = 'start' | 'center' | 'end' | 'around' | 'between';
type AlignSelf = 'start' | 'center' | 'end';
type AlignItems = 'start' | 'center' | 'end';
type Direction = 'row' | 'column';

type LayoutProps = {
    row?: boolean;
    column?: boolean;
    direction?: Direction;
    alignItems?: AlignItems;
    alignSelf?: AlignSelf;
    justifyContent: JustifyContent;
    className?: string;
};

export default function <
    TName extends HTMLElementTagName = 'span',
    TRef extends HTMLElementMap<TName>,
    TComponent extends InferredComponent<TComponent>
>(props: LayoutProps & RefForwardingProps<TName, TRef, TComponent>): JSX.Element;
