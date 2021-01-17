import {MenuSurfaceProps} from '../MenuSurface/MenuSurface';
import {ListProps} from '../List/List';
import {HTMLElementMap, HTMLElementTagName} from '../types';

export type MenuProps<E = any, R = any, LE = any, LR = any> = {
    listProps?: ListProps<LE, LR>;
    className?: string;
    open?: boolean;
} & MenuSurfaceProps<E, R>;

export default function <
    TElement extends HTMLElementTagName = 'div',
    TRef extends HTMLElementMap<TElement>,
    TListElement extends HTMLElementTagName = 'ul',
    TListRef extends HTMLElementMap<TListElement>
>(props: MenuProps<TElement, TRef, TListElement, TListRef>): JSX.Element;
